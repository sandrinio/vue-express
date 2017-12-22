<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2" >
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Password"
            v-model="password"
          ></v-text-field>
          <v-btn class="cyan" dark @click="register">Register</v-btn>
          <br>
          <v-snackbar
            :timeout="timeout"
            :top="y === 'top'"
            :bottom="y === 'bottom'"
            :right="x === 'right'"
            :left="x === 'left'"
            :multi-line="mode === 'multi-line'"
            :vertical="mode === 'vertical'"
            v-model="snackbar">

            {{ text }}
            <v-btn flat color="pink" @click="snackbar = false">Close</v-btn>
          </v-snackbar>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  /* eslint-disable */
  import authenticationService from '@/services/authenticationService'
export default {
 data () {
  return {
    email: '',
    password: '',
    snackbar: false,
    y: 'top',
    x: null,
    mode: '',
    timeout: 3000,
    text: ''
   }
  },
  methods: {
    async register (){
      try{
        const response = await authenticationService.register({
            email: this.email,
            password: this.password
          })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.snackbar = true
        this.text = `Welcome ${response.data.email}`
      }catch(error){
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
