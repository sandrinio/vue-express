<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import SongsService from '@/services/SongsService'
  import SongsPanel from './SongsPanel.vue'

  export default {
    components: {
      Panel,
      SongsPanel
    },
    data () {
      return {
        songs: null
      }
    },
    async mounted () {
      this.songs = (await SongsService.getAllSongs()).data
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .song {
    padding: 10px;
    height: 330px;
    overflow: hidden;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 18px;
  }

  .song-genre {
    font-size: 18px;
  }
</style>
