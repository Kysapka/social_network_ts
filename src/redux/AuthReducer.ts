import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./rootStore";
import {authAPI, LoginDataType} from "../bll/API";
import {Dispatch} from "redux";

const SET_AUTH = 'SET_AUTH'
const SET_LOGOUT = 'SET_LOGOUT'

export type AuthStateType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

export type AuthActionTypes =
    setAuthAT
    | setLogOutAT

type setAuthAT = ReturnType<typeof setAuthAC>
type setLogOutAT = ReturnType<typeof setLogOutAC>


export const initAuthState: AuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}


export const AuthReducer = (state: AuthStateType = initAuthState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.payload,isAuth: true}
        case SET_LOGOUT:
            debugger
            return {...state, ...initAuthState}
        default:
            return state
    }
}

export const setAuthAC = (payload: AuthStateType) => ({type: SET_AUTH, payload} as const)
export const setLogOutAC = () => ({type: SET_LOGOUT, initAuthState} as const)

export const loginTC = (loginData: LoginDataType): ThunkAction<void, AppStateType, unknown, AuthActionTypes> => (dispatch: ThunkDispatch<AppStateType, undefined, AuthActionTypes>) => {
    authAPI.login(loginData)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuth())
            }
        })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logOut().then(res => {
        if (res.data.resultCode === 0) {
            console.log('ready dispatch', res.data.resultCode)
            dispatch(setLogOutAC())
        }
    })
}

export const setAuth = (): ThunkAction<void, AppStateType, unknown, AuthActionTypes> =>
    (dispatch: ThunkDispatch<AppStateType, undefined, AuthActionTypes>) => {
        authAPI.authorizationMe()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthAC(data.data))
                }
            })
            .catch(err => console.log('Autorization failed... ' + err))
    }

