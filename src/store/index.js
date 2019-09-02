import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        modules
    },
    state,
    actions,
    getters,
    mutations,
})
