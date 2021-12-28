import {profileAPI} from "../apis/api";
import {RootThunkType} from "./store";

export type ProfilePageTypes = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    isFetching: boolean
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType ={
    small: string
    large: string
}

export type SetProfileACType = ReturnType<typeof setProfileAC>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>

export type DialogsActionsRootType = SetProfileACType | ToggleIsFetchingACType

const initialState: ProfilePageTypes = {
    userId: 0,
    aboutMe: '',
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    photos: {
        small: '',
        large: ''
    },
    isFetching: false
}

function profileReducer(state: ProfilePageTypes = initialState, action: DialogsActionsRootType): ProfilePageTypes {
    switch (action.type) {
        case 'SET-PROFILE':
            return action.data
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.value}
        default:
            return state
    }
}

export const setProfileAC = (data: ProfilePageTypes) => { return {type: 'SET-PROFILE', data} as const }
export const toggleIsFetchingAC = (value: boolean) => { return {type: 'TOGGLE-IS-FETCHING', value} as const }

export const getProfile = (userID: number): RootThunkType => async dispatch => {
    dispatch(toggleIsFetchingAC(true))
    const profile = await profileAPI.getProfile(+userID)
    dispatch(setProfileAC(profile))
    dispatch(toggleIsFetchingAC(false))
}

export default profileReducer