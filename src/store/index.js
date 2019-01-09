import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    location: '所在位置'
}

const actions = {
    changeLocation ( ctx, location) {
        ctx.commit('changeLocation',location)
    }
}

const mutations = {
    changeLocation ( state, location) {
        state.location = location
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store