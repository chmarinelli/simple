import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    preferences: []
  },
  getters: {
    preferences(state){
        return state.preferences;
    }
},
  mutations: {
    ADD_PREFERENCE(state, payload) {
      state.preferences = [...state.preferences, payload];
    }
  },
  actions: {
    addPreference({ commit }, payload) {
      commit('ADD_PREFERENCE', payload);
    },
  },
})
