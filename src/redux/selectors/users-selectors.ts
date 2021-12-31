import {AppStateTypes} from "../store";
import {UserType} from "../UsersReducer";
import {createSelector} from "reselect";

const getUsers = (state: AppStateTypes): UserType[] => {
    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(() => true)
})
export const getIsFollowFetching = (state: AppStateTypes): number[] => {
    return state.usersPage.isFollowFetching
}
export const getPagesSize = (state: AppStateTypes): number => {
    return state.usersPage.pagesSize
}
export const getCurrentPage = (state: AppStateTypes): number => {
    return state.usersPage.currentPage
}
export const getTotalUsersCount = (state: AppStateTypes): number => {
    return state.usersPage.totalUsersCount
}
export const getIsFetching = (state: AppStateTypes): boolean => {
    return state.usersPage.isFetching
}