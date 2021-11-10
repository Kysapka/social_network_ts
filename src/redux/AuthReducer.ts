import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./rootStore";
import {authAPI, LoginDataType} from "../bll/API";
import {Dispatch} from "redux";
import {AppInitActionsType, setAppInitializedAC} from "./AppReducer";

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
|AppInitActionsType

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
            return {...state, ...initAuthState}
        default:
            return state
    }
}

export const setAuthAC = (payload: AuthStateType) => ({type: SET_AUTH, payload} as const)
export const setLogOutAC = () => ({type: SET_LOGOUT, initAuthState} as const)

export const loginTC = (loginData: LoginDataType): ThunkAction<Promise<string>, AppStateType, unknown, AuthActionTypes> =>
    (dispatch) => {
   return  authAPI.login(loginData)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuth())
                return ""
            } else {
                if (res.data.messages[0].length > 0) {
                    return res.data.messages[0]
                }
            }
        return "";
        })
       .catch(e => {
           return e.message
       })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logOut().then(res => {
        if (res.data.resultCode === 0) {
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
                    dispatch(setAppInitializedAC(true))
                }
            })
            .catch(err => console.log('Autorization failed... ' + err))
    }

