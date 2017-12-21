import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('/songs')
  },
  createSong (song){
    return Api().post('/songs', song)
  },
  show (songId){
    return Api().get(`/song/${songId}`)
  },
  put (song){
    return Api().put(`/song/${song.id}`, song)
  }
}
