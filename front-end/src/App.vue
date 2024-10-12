<template>
  <div id="app">
    <router-view /> <!-- Exibe o componente correspondente à rota atual -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
