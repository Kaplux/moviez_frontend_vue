<template>
  <v-app>
    <div id="app">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  text-align: center;
}
</style>
