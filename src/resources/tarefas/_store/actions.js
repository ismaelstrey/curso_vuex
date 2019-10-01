export default {
  buscarTarefas: (context, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([

          { id: 1, titulo: "Aprender vue 1", concluido: false },
          { id: 2, titulo: "Aprender vue 2", concluido: true },
          { id: 3, titulo: "Aprender vue 3", concluido: true },
          { id: 4, titulo: "Aprender vue 4", concluido: true }
        ])
      }, 2000)
    })

  },

  listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }, payload) => {
    const tarefas = await dispatch('buscarTarefas')
    commit('listarTarefas', { tarefas })
    dispatch('logar', 'Ismael Strey Pereira', { root: true })
  }
}
