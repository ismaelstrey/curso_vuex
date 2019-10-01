<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de tarefas</h1>
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary floatright" @click="exibirFormularioCriarTarefa">
          <i class="fa fa-plus mr-2"></i>
          <span>criar</span>
        </button>
      </div>
    </div>

    <h3 class="font-weight-light mt-4">A fazer ({{tarefasAFazer.length}})</h3>

    <ul class="list-group" v-if="tarefasAFazer.length > 0">
      <TarefasListaIten
        v-for="tarefa in tarefasAFazer"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
        @concluir="concluirTarefa({tarefa: $event})"
      />
    </ul>
    <p v-else>Nenhuma Tarefa a fazer</p>

    <h3 class="font-weight-light mt-4">Tarefas concluidas ({{totalDeTarefasConcluidas}})</h3>

    <ul class="list-group" v-if="tarefasConcluidas.length > 0">
      <TarefasListaIten
        v-for="tarefa in tarefasConcluidas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @editar="selecionarTarefaParaEdicao"
        @concluir="concluirTarefa({tarefa: $event})"
      />
    </ul>
    <p v-else>Nenhuma Tarefa concluida</p>
    <TarefaSalvar v-if="exibirFormulario" :tarefa="tarefaSelecionada" />
  </div>
</template>
<script>
import register from './../_store/register'
import { createNamespacedHelpers } from 'vuex'
import TarefasListaIten from '@/resources/tarefas/_components/TarefasListaIten'
import TarefaSalvar from '@/resources/tarefas/_components/TarefaSalvar'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('tarefas')
export default {
  components: {
    TarefasListaIten,
    TarefaSalvar
  },
  data () {
    return {
      exibirFormulario: false,
      tarefaSelecionada: undefined
    }
  },
  computed: {
    ...mapState(['tarefas']),
    ...mapGetters([
      'tarefasConcluidas',
      'tarefasAFazer',
      'totalDeTarefasConcluidas',
      'boasVindas'
    ])
  },
  created () {
    register(this.$store)
    this.listarTarefas()
  },
  methods: {
    ...mapActions([
      'listarTarefas',
      'concluirTarefa'
    ]),
    exibirFormularioCriarTarefa (event) {
      if (this.tarefaSelecionada) {
        this.tarefaSelecionada = undefined
        console.log('tarefa selecionada', this.tarefaSelecionada)
        return
      }
      this.exibirFormulario = !this.exibirFormulario
      console.log('tarefa nao selecionada', this.tarefaSelecionada)
    },
    selecionarTarefaParaEdicao (tarefa) {
      this.exibirFormulario = true
      this.tarefaSelecionada = tarefa
    },
    resetar () {
      this.exibirFormulario = false
      this.tarefaSelecionada = undefined
    }
  }
}
</script>
