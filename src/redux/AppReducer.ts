const SET_APP_INITIALIZED = 'SET_APP_INITIALIZED'

export type AppInitType = {
    isAppInitialized: boolean
}

export const initAppInitState:AppInitType = {
    isAppInitialized: false
}

export const AppReducer = (state: AppInitType = initAppInitState, action: AppActionTypes): AppInitType => {
    switch (action.type) {
        case SET_APP_INITIALIZED:
            return {...state, isAppInitialized: action.isAppInitialized}
        default:
            return state
    }
}

export const setAppInitializedAC = (isAppInitialized: boolean) => ({type: SET_APP_INITIALIZED, isAppInitialized} as const)


export type AppInitActionsType = ReturnType<typeof setAppInitializedAC>
type AppActionTypes = AppInitActionsType