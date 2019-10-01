<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Tarefa</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <label>Titulo</label>
            <input
              type="text"
              class="form-control"
              placeholder="Titulo da Tarefa"
              :value="tarefa && tarefa.titulo"
            />
          </div>
        </div>
        <div class="col-sm-2" v-if="tarefa">
          <div class="form-group">
            <label>Tarefa concluida</label>
            <button type="button" class="btn btn-sm d-block" :class="classeBotao">
              <i class="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Salvar
        <i class="fa fa-save"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    tarefa: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    classeColuna() {
      return this.tarefa ? "col-sm-10" : "col-sm-12";
    },
    classeBotao() {
      return this.tarefa && this.tarefa.concluido
        ? "btn-success"
        : "btn-secondary";
    }
  },
  created() {
    if (this.tarefa) {
      console.log(
        "Tarefa por id:",
        this.$store.getters["tarefas/buscarTarefaPorId"](this.tarefa.id)
      );
    }
  },
  methods: {
    salvar(event) {
      const operacao = !this.tarefa ? "criar" : "editar";
      console.log("Operação:", operacao);
    }
  }
};
</script>
