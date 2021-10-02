const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type initialUserPageStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
let initialUserPageState: initialUserPageStateType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false
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

type followedAT = ReturnType<typeof follow>
type unFollowedAT = ReturnType<typeof unFollow>
type setUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type toogleIsFetchingAT = ReturnType<typeof toggleIsFetching>

export const UsersReducer = (state: initialUserPageStateType = initialUserPageState, action: UsersReducerActionsTypes): initialUserPageStateType => {
    switch (action.type) {
        case FOLLOWED:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case UNFOLLOWED:
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, users: [...action.items]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case "SET_TOTAL_USERS_COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE_IS_FETCHING":
            return  {...state, isFetching: action.value}
        default:
            return state
    }
}

export const setUsers = (items: Array<UserType>) => ({type: SET_USERS, items} as const)
export const follow = (userID: number) => ({type: FOLLOWED, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOWED, userID} as const)
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
export const toggleIsFetching = (value: boolean) => ({type: TOGGLE_IS_FETCHING, value} as const)
