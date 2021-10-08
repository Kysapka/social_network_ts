import axios from "axios";

const instanceUsersApi = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": "9660a6e9-744c-4376-8717-32b82016bc28"
    }
})

export const usersAPI = {
    getUsers: (currentPage: number =  1, pageSize: number = 10) => {
        return instanceUsersApi.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
        })
    },
    unFollow: (userId: number) => {
        return instanceUsersApi.delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    follow: (userId: number) => {
        return instanceUsersApi.post(`follow/${userId}`, {})
            .then(response => response.data.resultCode)
    }
}



