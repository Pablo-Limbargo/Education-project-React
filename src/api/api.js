import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '9144d965-ca3d-4806-92f7-a7c36ccf9b71'
    }
})

export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data
            })
}}



