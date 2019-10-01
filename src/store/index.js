import Vue from 'vue'
import Vuex from 'vuex'
import contador from '@/resources/contador/_store/'

Vue.use(Vuex)

const state = {
  usuario: 'Ismael'
}
const getters = {
  mensagemBoasVindas: state => `olá ${state.usuario}`
}

const mutations = {
  logar: (state, usuario) => {
    state.usuario = usuario
  }
}
const modules = {
  contador
}
const actions = {
  logar: ({ commit }, usuario) => {
    commit('logar', usuario)
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations,
  modules
}
)
