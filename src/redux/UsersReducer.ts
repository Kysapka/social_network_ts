const FOLLOWED = 'FOLLOWED'
const UNFOLLOWED = 'UNFOLLOWED'
const SET_USERS = 'SET_USERS'

export type UsersPageType = Array<{ id: string, followed: boolean, firstName: string, country: string }>

const initialUsersPageState:UsersPageType = [
    {id: "1", followed: true, firstName: "Alexey", country: "Moscow"},
    {id: "2", followed: false, firstName: "Misha", country: "Ryazan"},
    {id: "3", followed: true, firstName: "Nick", country: "Adler"}
]

type UsersReducersActionsTypes =
    followedAT
    | unFollowedAT
    | setUsersAT

type followedAT = ReturnType<typeof followedAC>
type unFollowedAT = ReturnType<typeof unFollowAC>
type setUsersAT = ReturnType<typeof setUsersAC>

export const UsersReducer = (state:UsersPageType = initialUsersPageState, action: UsersReducersActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOWED:
            return state.map(u => u.id === action.userID ? {...u, followed: true} : u)
        case UNFOLLOWED:
            return state.map(u => u.id === action.userID ? {...u, followed: false} : u)
        case "SET_USERS":
            return initialUsersPageState
        default:
            return state
            // throw new Error('Users Reducer Action Type Error!')
    }
}

export const setUsersAC = () => ({type: SET_USERS} as const)
export const followedAC = (userID: string) => ({type: FOLLOWED, userID} as const)
export const unFollowAC = (userID: string) => ({type: UNFOLLOWED, userID} as const)