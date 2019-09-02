import { http } from '../config'

export const getUserGitHub = (data) => {
    return http.get(data.nameUserGitHub)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getReposGitHub = (data) => {
    return http.get(data.nameUserGitHub + "/repos")
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getStarredGitHub = (data) => {
    return http.get(data.nameUserGitHub + "/starred")
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}