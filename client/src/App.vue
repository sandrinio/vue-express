<template>
  <div id="app">
    <v-app>
      <v-content>
        <page-header></page-header>
        <v-container fluid>
          <router-view/>
        </v-container>
        </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import Login from '@/components/login.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
