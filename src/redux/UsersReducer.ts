import {Dispatch} from "redux";
import {usersAPI} from "../bll/API";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./rootStore";

const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROPGRESS = 'TOGGLE_FOLLOWING_PROPGRESS'

export type initialUserPageStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}
let initialUserPageState: initialUserPageStateType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type UserType = {
    id: number,
    name: string,
    status: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
}

type UsersReducerActionsTypes =
    followedAT
    | unFollowedAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | toogleIsFetchingAT
    | toggleFollowingAT

type followedAT = ReturnType<typeof followAC>
type unFollowedAT = ReturnType<typeof unFollowAC>
type setUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type toogleIsFetchingAT = ReturnType<typeof toggleIsFetching>
type toggleFollowingAT = ReturnType<typeof toggleFollowing>

export const UsersReducer = (state: initialUserPageStateType = initialUserPageState, action: UsersReducerActionsTypes): initialUserPageStateType => {
    switch (action.type) {
        case FOLLOWED:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOWED:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...action.items]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.value}
        case TOGGLE_FOLLOWING_PROPGRESS:
            return action.isFetching
                ? {...state, followingInProgress: [...state.followingInProgress, action.userId]}
                : {...state, followingInProgress: state.followingInProgress.filter(elId => elId !== action.userId)}
        default:
            return state
    }
}

export const setUsers = (items: Array<UserType>) => ({type: SET_USERS, items} as const)
export const followAC = (userID: number) => ({type: FOLLOWED, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOWED, userID} as const)
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
export const toggleIsFetching = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value} as const)
export const toggleFollowing = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROPGRESS,
    isFetching,
    userId
} as const)


// THUNK`s
export const getUsers = (currentPage: number, pageSize: number): ThunkAction<void, AppStateType, unknown, UsersReducerActionsTypes> =>
    (dispatch: ThunkDispatch<AppStateType, undefined, UsersReducerActionsTypes>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
            .catch(err => console.warn('Loading users error... ' + err))
        // Иммитация задержки чтобы увидеть крутилку
        setTimeout(() => {
            dispatch(toggleIsFetching(false))
        }, 500)
    }

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowing(true, userId))
    usersAPI.follow(userId)
        .then(() => {
            dispatch(followAC(userId))
            dispatch(toggleFollowing(false, userId))
        })
        .catch(err => console.warn('Following user failed... ' + err))
}

export const unFollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowing(true, userId))
    usersAPI.unFollow(userId)
        .then(() => {
            dispatch(unFollowAC(userId))
            dispatch(toggleFollowing(false, userId))
        })
        .catch(err => console.warn('Following user failed... ' + err))
}