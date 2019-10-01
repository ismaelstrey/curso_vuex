<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Vuex {{this.$store.state.contador.contador}}</h1>
        <h1 class="display-3">Menssagem boas vindas {{this.$store.state.mensagemBoasVindas}}</h1>
        <p class="lead">Padrão de gerenciamento de estado VUEX</p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 border-right">
          <TarefasLista />
        </div>
        <div class="col-sm-3">
          <Contador />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Contador from "@/resources/contador/_components/Contador";
import TarefasLista from "@/resources/tarefas/_components/TarefasLista";
export default {
  name: "app",
  components: {
    Contador,
    TarefasLista
  }
};
</script>
<style lang="scss">
</style>
