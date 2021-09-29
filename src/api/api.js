import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const setAuth = () => {
    return instance.get('auth/me')
        .then(response => {
            return response.data
        })
}

export const authAPI = {
    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

