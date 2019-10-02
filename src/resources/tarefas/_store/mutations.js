import { LISTAR_TAREFAS, CRIAR_TAREFAS, EDITAR_TAREFAS, DELETAR_TAREFAS, SELECIONAR_TAREFA } from './mutations-types'

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
  },
  [SELECIONAR_TAREFA]: (state, { tarefa }) => {
    state.tarefaSelecionada = tarefa
  }
}
