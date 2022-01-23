import axios from "axios";
import {UserType} from "../redux/UsersReducer";
import {ProfilePageTypes} from "../redux/ProfileReducer";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY
    }
})

export type ResponseApiType<T> = {
    resultCode: 1 | 0
    messages: string[]
    data: T
}
type UserApiResponseType = {
    error: null | string
    items: UserType[]
    totalCount: number
}
type AuthResponseDataType = {
    id: number
    email: string
    login: string
}
type ProfileApiResponseType = ProfilePageTypes

export const followAPI = {
     follow (userID: number) {
        return instance.post<ResponseApiType<{}>>(`follow/${userID}`, {})
            .then(res => res.data)
    },
    unfollow(userID: number) {
        return instance.delete<ResponseApiType<{}>>(`follow/${userID}`)
            .then(res => res.data)
    },
}
export const usersAPI = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get<UserApiResponseType>(`users?page=${currentPage}&count=${pagesSize}`)
            .then(res => {
                return res.data
            })
    },
}
export const authAPI = {
    authMe() {
        return instance.get<ResponseApiType<AuthResponseDataType>>(`auth/me`)
            .then(res => {
                return res.data
            })
    },

    logIn(email: string, password: string, rememberMe: boolean, captcha: boolean) {
        return instance.post<ResponseApiType<{userId: number}>>('auth/login', {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete<ResponseApiType<{}>>('auth/login')
    },
}
export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<ProfileApiResponseType>(`profile/${userID}`)
            .then(res => {
                return res.data
            })
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/${userID}`)
    },
    setStatus(status: string) {
        return instance.put('profile/status', {status})
    }
}