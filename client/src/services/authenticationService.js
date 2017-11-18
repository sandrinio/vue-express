import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// authenticationService.register({
//   email: 'sandro.suladze@gmail.com',
//   password: '123456'
// })
