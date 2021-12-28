import {authAPI, profileAPI} from "../../apis/api";
import {RootThunkType} from "../store";
import {AuthInitialStateTypes, AuthRootActionsType, initialState, SetAuthUserDataType} from "./authTypes";
import {authActions} from "./authActions";
import {ProfilePageTypes} from "../profileReducer";

function authReducer(state: AuthInitialStateTypes = initialState, action: AuthRootActionsType): AuthInitialStateTypes {
    switch (action.type) {
        case authActions.SET_AUTH_USER_DATA:
            return { ...state, ...action.payload, isAuth: true, isFetching: false, }
        case authActions.LOGIN:
            return { ...state, ...action.payload, isAuth: true, isFetching: false, }
        case authActions.LOGOUT:
            return { ...initialState, isInitialized: true}
        case authActions.SET_RESPONSE_ERROR:
            return { ...state, isResponseError: action.isError}
        case authActions.SET_INITIALIZED_STATUS:
            return { ...state, isInitialized: action.status}
        case authActions.SET_MY_DATA:
            return { ...state, smallPhoto: action.payload.photos.small }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataType => {
    return {type: authActions.SET_AUTH_USER_DATA, payload: {id, email, login}}
}
export const setLoginData = (id: number, email: string, login: string) => {
    return {type: authActions.LOGIN, payload: {id, email, login}} as const
}
export const setLogoutData = () => {
    return {type: authActions.LOGOUT} as const
}
export const setResponseError = (isError: null | string) => {
    return {type: authActions.SET_RESPONSE_ERROR, isError} as const
}
export const setInitializedStatus = (status: boolean) => {
    return {type: authActions.SET_INITIALIZED_STATUS, status} as const
}
export const setMyData = (data: ProfilePageTypes) => {
    return {type: authActions.SET_MY_DATA, payload: data} as const
}

export const loginMe = (email: string, password: string, rememberMe: boolean = false, captcha: boolean):
    // zLTUyiXvk_cf9fk
    RootThunkType => async dispatch => {
    try {
        const response =  await authAPI.logIn(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(setLoginData(response.data.data.userId, email, ''))
        } else if (response.data.resultCode === 1) {
            const error = response.data.messages[0] ?? 'Some error occurred'
            dispatch(setResponseError(error))
        }
    } catch (error) {

    }
}

export const logOut = (): RootThunkType => async dispatch => {
    const response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setLogoutData())
    }
}

export const getAuthUserData = (): RootThunkType => async dispatch => {
    const authData = await authAPI.authMe()
    if (authData.resultCode === 0) {
        const {id, login, email} = authData.data
        dispatch(setAuthUserData(id, email, login))
        dispatch(setInitializedStatus(true))
        const myProfile = await profileAPI.getProfile(authData.data.id)
        dispatch(setMyData(myProfile))
    } else {
        dispatch(setInitializedStatus(true))
    }
}

export default authReducer