<template>
<v-toolbar class="cyan" fixed dark>
  <v-toolbar-title class="mr-4" @click="navigateTo({name: 'home'})"><span class="home">Nav Tab</span></v-toolbar-title>
  <v-toolbar-items>
    <v-btn flat dark
           @click="navigateTo({name: 'songs'})">
      Browse
    </v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn
      v-if="!$store.state.isUserLoggedIn"
      to="register"
      dark flat
      class="btn cyan">
      Sign Up
    </v-btn>

    <v-btn
      v-if="!$store.state.isUserLoggedIn"
      to="login"
      dark flat
      class="btn cyan">
      Login
    </v-btn>
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      dark flat
      class="btn cyan">
      {{ this.$store.state.user.email }}
    </v-btn>
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      dark flat
      @click="logout"
      class="btn cyan">
      Logout
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
//        user: $store.state.user.email
      }
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout ()  {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: rgba(0, 255, 255, 0.33);
}
</style>
