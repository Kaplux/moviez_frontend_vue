<template>
  <v-app>
    <v-parallax :src="require('@/assets/movie-theater-revival-popcorn.jpg')" height="200" />
    <div id="maindiv">
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
#maindiv {
  text-align: center;
  margin-top: 60px;
}
</style>
