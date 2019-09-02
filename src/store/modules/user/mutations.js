import * as types from './mutation-types'

const mutations = {
    [types.GET_USER_SUCCESS](state, user) {
        state.user = user
    },
    [types.GET_USER_ERROR](state, user) {
        state.user = user
    },
    [types.GET_USER_REPOS_SUCCESS](state, user) {
        state.user = user
    },
    [types.GET_USER_REPOS_ERROR](state, user) {
        state.user = user
    },
    [types.GET_USER_STARRED_SUCCESS](state, user) {
        state.user = user
    },
    [types.GET_USER_STARRED_ERROR](state, user) {
        state.user = user
    }
}

export default mutations