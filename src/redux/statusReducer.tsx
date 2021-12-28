import {profileAPI} from "../apis/api";
import {RootThunkType} from "./store";

type StatusStateType = { status: string }

const initialStatusState = {status: ''}

function statusReducer(state: StatusStateType = initialStatusState, action: StatusRootActionsType): StatusStateType {
    switch (action.type) {
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export type StatusRootActionsType = ReturnType<typeof setStatus>

const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

export const getStatus = (userID: number): RootThunkType => async dispatch => {
    const status = await profileAPI.getStatus(userID)
    dispatch(setStatus(status.data))
}
export const setNewStatus = (status: string): RootThunkType => async dispatch => {
    const data = await profileAPI.setStatus(status)
    if (data.status === 200) {
        dispatch(setStatus(status))
    }
}

export default statusReducer

