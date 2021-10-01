const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'

export type UsersType = Array<{
    id: number,
    name: string,
    status: string
    photos: {
        small: string,
        large: string
    }
    followed: boolean
}>


type UsersReducersActionsTypes =
    followedAT
    | unFollowedAT
    | setUsersAT

type followedAT = ReturnType<typeof followAC>
type unFollowedAT = ReturnType<typeof unFollowAC>
type setUsersAT = ReturnType<typeof setUsersAC>

export const UsersReducer = (state: UsersType = [], action: UsersReducersActionsTypes): UsersType => {
    switch (action.type) {
        case FOLLOWED:
            return state.map(u => u.id === action.userID ? {...u, followed: true} : u)
        case UNFOLLOWED:
            return state.map(u => u.id === action.userID ? {...u, followed: false} : u)
        case "SET_USERS":
            console.log(action.items)
            return [...action.items]
        default:
            return state
    }
}

export const setUsersAC = (items: UsersType) => ({type: SET_USERS, items} as const)
export const followAC = (userID: number) => ({type: FOLLOWED, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOWED, userID} as const)
