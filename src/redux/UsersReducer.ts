import {RootThunkType} from "./store";
import {followAPI, usersAPI} from "../apis/api";

export type UsersPageTypes = {
    users: UserType[]
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowFetching: number[]
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    followed: boolean
    photos: PhotosType
    uniqueUrlName: string
    status: string
}

const initialState = {
    users: [],
    pagesSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowFetching: []
}

function usersReducer(state: UsersPageTypes = initialState, action: UsersRootActionsType) {
    switch (action.type) {
        case 'SET-USERS':
            return {
                ...state, users: action.users}
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = true
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        u.followed = false
                    }
                    return u
                })
            }
        case 'TOGGLE-FOLLOW-IS-FETCHING':
            return {
                ...state,
                isFollowFetching: action.fetchingStatus
                    ? [...state.isFollowFetching, action.userID]
                    : state.isFollowFetching.filter( a => a !== action.userID)
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-PAGES-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type ToggleFollowIsFetching = ReturnType<typeof toggleFollowIsFetching>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetPagesCountType = ReturnType<typeof setTotalCount>
type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export type UsersRootActionsType = FollowType
    | UnfollowType
    | ToggleFollowIsFetching
    | SetUsersType
    | SetCurrentPageType
    | SetPagesCountType
    | ToggleIsFetchingType

export const follow = (userID: number) => { return {type: 'FOLLOW', userID} as const }
export const unfollow = (userID: number) => { return {type: 'UNFOLLOW', userID} as const }
export const toggleFollowIsFetching = (userID: number, fetchingStatus: boolean) => { return {type: 'TOGGLE-FOLLOW-IS-FETCHING', userID, fetchingStatus} as const }
export const setUsers = (users: Array<UserType>) => { return {type: 'SET-USERS', users} as const }
export const setCurrentPage = (currentPage: number) => { return {type: 'SET-CURRENT-PAGE', currentPage} as const }
export const setTotalCount = (totalCount: number) => { return {type: 'SET-PAGES-COUNT', totalCount} as const }
export const toggleIsFetching = (isFetching: boolean) => { return {type: 'TOGGLE-IS-FETCHING', isFetching} as const }

export const setFollow = (userID: number): RootThunkType => async dispatch => {
    dispatch(toggleFollowIsFetching(userID, true))
    const followData = await followAPI.follow(userID)
    if (followData.resultCode === 0)  dispatch(follow(userID))
    dispatch(toggleFollowIsFetching(userID, false))
}
export const setUnfollow = (userID: number): RootThunkType => async dispatch => {
    dispatch(toggleFollowIsFetching(userID, true))
    const followData = await followAPI.unfollow(userID)
    if (followData.resultCode === 0)  dispatch(unfollow(userID))
    dispatch(toggleFollowIsFetching(userID, false))
}
export const getUsers = (currentPage: number, pageSize: number): RootThunkType => async dispatch => {
    const users = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(users.items))
    dispatch(toggleIsFetching(false))
    dispatch(setTotalCount(users.totalCount))

}

export default usersReducer