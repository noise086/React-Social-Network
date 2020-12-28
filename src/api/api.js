import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6b1e8793-6fa0-49cd-9276-ae8037ec09e7'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    setFollow (id) {
        return instance.post(`follow/${id}`)
        .then(res => res.data)
    },
    setUnFollow (id) {
        return instance.delete(`follow/${id}`)
        .then(res => res.data)
    },
    getProfile (userId) {
        console.warn('Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me () {
        return instance.get('auth/me')
    },
    signIn(email, password, rememberMe) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    signOut() {
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    setStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, { status })
    }
}

