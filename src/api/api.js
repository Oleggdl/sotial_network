import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '56c32176-e78d-43a0-8c83-3d89e313b505'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId) {
       return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        })
    },
    unfollow(userId) {
       return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {      
        })
    }
}


// export let getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => {
//         return response.data
//     })

// }


