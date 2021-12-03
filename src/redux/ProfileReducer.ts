import {Dispatch} from "redux";
import {profileAPI} from "../bll/API";
import {toggleIsFetching, UsersReducerActionsTypes} from "./UsersReducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'


export type postsDataType = postType[]
export type postType = {
    id: string
    message: string
    likesCount: number
}

export type userProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    status: string
    posts: postsDataType,
    newPostText: string,
    profile: userProfileType
}

export type ProfileReducerActionTypes =
    | UsersReducerActionsTypes
    | AddPostActionType
    | setUserProfileActionType
    | ReturnType<typeof setStatusAC>

export type AddPostActionType = ReturnType<typeof addPostAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>

const initProfileState: ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi, haw are you?', likesCount: 2},
        {id: '1', message: 'This is my first post', likesCount: 8},
        {id: '1', message: 'Hello', likesCount: 10}
    ],
    newPostText: "it-kamasutra",
    status: 'start status from profile reducer',
    profile: {
        aboutMe: '',
        userId: 0,
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
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    }
}

export const ProfileReducer = (state: ProfilePageType = initProfileState, action: ProfileReducerActionTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '7',
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
            return {...state, profile: {...action.profile}}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }

}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfileAC = (profile: userProfileType) => ({type: SET_USER_PROFILE, profile} as const)
const setStatusAC = (status: string) => ({type: SET_STATUS, status} as const)

export const getProfileTC = (userId: number) => (dispatch: Dispatch<ProfileReducerActionTypes>) => {
    dispatch(toggleIsFetching(true))
    profileAPI.setProfile(userId).then(data => {
        dispatch(setUserProfileAC(data))
        dispatch(toggleIsFetching(false))
    })
}

export const getStatusTC = (userID: number) => (dispatch: Dispatch<ProfileReducerActionTypes>) => {
    dispatch(toggleIsFetching(true))
    profileAPI.getStatus(userID)
        .then((res) => {
            res.data && dispatch(setStatusAC(res.data))
            dispatch(toggleIsFetching(false))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch<ProfileReducerActionTypes>) => {
    dispatch(toggleIsFetching(false))
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
            dispatch(toggleIsFetching(false))
        })
}