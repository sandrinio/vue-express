<template>
  <div>
    <h1>Register </h1>
    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
  /* eslint-disable */
  import authenticationService from '@/services/authenticationService'
export default {
 data () {
  return {
   email: '',
    password: ''
   }
  },
  methods: {
    async register (){
    const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data.message)
    }
  }
}
</script>

