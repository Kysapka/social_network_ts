import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": "9660a6e9-744c-4376-8717-32b82016bc28"
    }
})

export const authAPI = {
    authorizationMe: () => instance.get(`auth/me`)
        .then(response => response.data)
        .catch((err) => console.warn('NOT authorization, SERVER NOT RESPONSE...' + err))
    }

export const usersAPI = {
    getUsers: (currentPage: number =  1, pageSize: number = 10) => instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data )
        .catch(err => console.warn('USERS NOT RECEIVED, SERVER NOT RESPONSE...' + err)),
    follow: (userId: number) => instance.post(`follow/${userId}`)
        .then(response => response.data.resultCode)
        .catch(err => console.warn('USER NOT FOLLOW, SERVER NOT RESPONSE...' + err)),
    unFollow: (userId: number) => instance.delete(`follow/${userId}`)
        .then(response => response.data.resultCode)
        .catch(err => console.warn('USER NOT UNFOLLOW, SERVER NOT RESPONSE...' + err)),
}

export const profileAPI = {
    setProfile: (userId: number | string) => instance.get(`profile/${userId}`)
        .then(response => response.data)
        .catch(err => console.warn('PROFILE NOT SET, SERVER NOT RESPONSE...' + err)),
    getStatus: (userId: number) => instance.get<number, any>(`profile/status/${userId}`)
        .then(res => res)
        .catch(err => console.warn('Cannot load status... ' + err)),
    updateStatus: (status: string) => instance.put<any, ResponseType>(`profile/status`, {status})
        .then(res => res)
}

type ResponseType = {
    data: any
}




