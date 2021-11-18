import {AppStateType} from "../../redux/rootStore";
import {createSelector} from "reselect";


export const getUsersState = (state: AppStateType) => {
    return state.usersPage.users
}
export const getpageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getUsersStateReselect = createSelector(getUsersState, users => users)
export const getpageSizeReselect = createSelector(getpageSize, pageSize => pageSize)
export const getTotalUsersCountReselect = createSelector(getTotalUsersCount, totalUsersCount => totalUsersCount)
export const getCurrentPageReselect = createSelector(getCurrentPage, currentPage => currentPage)
export const getIsFetchingReselect = createSelector(getIsFetching, isFetching => isFetching)
export const getFollowingInProgressReselect = createSelector(getFollowingInProgress, followingInProgress => followingInProgress)