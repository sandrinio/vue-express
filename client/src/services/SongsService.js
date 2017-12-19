import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('/songs')
  },
  createSong (song){
    return Api().post('/songs', song)
  }
}
