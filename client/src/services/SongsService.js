/* eslint-disable */
import Api from '@/services/Api'

export default {
  getAllSongs (search) {
    return Api().get('/songs', {
      params: {
        search: search
      }
    })
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
