import * as user from '@/services/modules/user'
import * as types from './mutation-types'

export const getUser = ({ commit }, data) => {
    return user.getUserGitHub(data)
        .then(result => {
            commit(types.GET_USER_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.GET_USER_ERROR, err)
            return Promise.reject(err)
        })
}

export const getRepos = ({ commit }, data) => {
    return user.getReposGitHub(data)
        .then(result => {
            commit(types.GET_USER_REPOS_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.GET_USER_REPOS_ERROR, err)
            return Promise.reject(err)
        })
}

export const getStarred = ({ commit }, data) => {
    return user.getStarredGitHub(data)
        .then(result => {
            commit(types.GET_USER_STARRED_SUCCESS, result.data)
            return Promise.resolve(result)
        }).catch(err => {
            commit(types.GET_USER_STARRED_ERROR, err)
            return Promise.reject(err)
        })
}