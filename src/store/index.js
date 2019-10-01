import Vue from 'vue'
import Vuex from 'vuex'
import contador from '@/resources/contador/_store/index'
import tarefas from '@/resources/tarefas/_store/index'

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
  contador,
  tarefas
}
const actions = {
  logar: ({ commit }, usuario) => {
    commit('logar', usuario)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
}
)


