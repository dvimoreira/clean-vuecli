import axios from 'axios'

const API_HOST = process.env.VUE_APP_API_HOST

require('../../security/interceptors')

const forgotPassword = (data) => {
    return axios.post(`${API_HOST}/auth/forgot-password`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

const resetPassword = (data) => {
    return axios.post(`${API_HOST}/reset-password`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

const login = (data) => {
    return axios.post(`${API_HOST}/organizer/login`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

const register = (data) => {
    return axios.post(`${API_HOST}/organizer/register`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            return error.response
        })
}

export default {
    forgotPassword,
    resetPassword,
    login,
    register
}
