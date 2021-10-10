import axios from "axios";

const instanceUsersApi = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": "9660a6e9-744c-4376-8717-32b82016bc28"
    }
})

export const authAPI = {
    autorizatedMe: () => instanceUsersApi.get(`auth/me`)
        .then(response => response.data.data)
        .catch(err => console.warn('NOT AUTORIZED, SERVER NOT RESPONSE...'))
    }

export const usersAPI = {
    getUsers: (currentPage: number =  1, pageSize: number = 10) => instanceUsersApi.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data )
        .catch(err => console.warn('USERS NOT RECIVED, SERVER NOT RESPONSE...')),
    follow: (userId: number) => instanceUsersApi.post(`follow/${userId}`)
        .then(response => response.data.resultCode)
        .catch(err => console.warn('USER NOT FOLLOW, SERVER NOT RESPONSE...')),
    unFollow: (userId: number) => instanceUsersApi.delete(`follow/${userId}`)
        .then(response => response.data.resultCode)
        .catch(err => console.warn('USER NOT UNFOLLOW, SERVER NOT RESPONSE...')),
    setProfile: (userId: number | string) => instanceUsersApi.get(`profile/${userId}`)
        .then(response => response.data)
        .catch(err => console.warn('PROFILE NOT SETTED, SERVER NOT RESPONSE...')),
}



