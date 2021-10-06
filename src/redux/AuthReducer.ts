const SET_AUTH = 'SET_AUTH'

export type AuthStateType = {
    email: string | null
    id: number    | null
    login: string | null
    isAuth: boolean
}

export type AuthActionTypes = setAuthAT
type setAuthAT = ReturnType<typeof setAuth>

const initAuthState: AuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}


export const AuthReducer = (state: AuthStateType = initAuthState, action: AuthActionTypes):AuthStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            }
        default: return state
    }
}

// export const setAuth = (email: string, id: number, login: string, isAuth: boolean) => ({type: SET_AUTH, payload:{email, id, login}} as const)
export const setAuth = (payload: AuthStateType) => ({type: SET_AUTH, payload} as const)