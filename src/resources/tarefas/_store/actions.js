import * as types from './mutations-types'
import TarefasService from './../_services/TarefasService'
export default {
  concluirTarefa: async ({ dispatch }, payload) => {
    const tarefa = Object.assign({}, payload.tarefa)
    tarefa.concluido = !tarefa.concuido
    dispatch('editarTarefa', { tarefa })
  },
  criarTarefa: ({ commit }, { tarefa }) => {
    return TarefasService.postTtarefa(tarefa)
      .then(response => commit(types.CRIAR_TAREFAS, { tarefa: response.data })
      )
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.putTarefa(tarefa)
    commit(types.EDITAR_TAREFAS, { tarefa: response.data })
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.deletarTarefa(tarefa.id)
    commit(types.DELETAR_TAREFAS, { tarefa })
    console.log('Response Actions Service', response)
  },

  listarTarefas: async ({ commit }) => {
    const response = await TarefasService.getTarefas()
    commit(types.LISTAR_TAREFAS, { tarefas: response.data })
  }
}
