import { LISTAR_TAREFAS, CRIAR_TAREFAS, EDITAR_TAREFAS, DELETAR_TAREFAS } from './mutations-types'

export default {

  [CRIAR_TAREFAS]: (state, { tarefa }) => {
    state.tarefas.push(tarefa)
  },
  [EDITAR_TAREFAS]: (state, { tarefa }) => {
    const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
    state.tarefas.splice(indice, 1, tarefa)
  },
  [DELETAR_TAREFAS]: (state, { tarefa }) => {
    const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
    state.tarefas.splice(indice, 1)
  },
  [LISTAR_TAREFAS]: (state, { tarefas }) => {
    state.tarefas = tarefas
  }
}
