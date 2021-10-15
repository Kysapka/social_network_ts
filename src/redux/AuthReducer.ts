import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./rootStore";
import {authAPI} from "../bll/API";

const SET_AUTH = 'SET_AUTH'

export type AuthStateType = {
        email: string | null
        id: number | null
        login: string | null
        isAuth: boolean
}

export type AuthActionTypes =
    setAuthAT

type setAuthAT = ReturnType<typeof setAuthAC>


export const initAuthState: AuthStateType = {
        email: null,
        id: null,
        login: null,
        isAuth: false,
}


export const AuthReducer = (state: AuthStateType = initAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthAC = (payload: AuthStateType) => ({type: SET_AUTH, payload} as const)

export const setAuth = ():ThunkAction<void, AppStateType, unknown, AuthActionTypes> =>
    (dispatch: ThunkDispatch<AppStateType, undefined, AuthActionTypes>) => {
        authAPI.authorizationMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthAC(data.data))
                }
        })
            .catch(err => console.log('Autorization failed... ' + err))
}

