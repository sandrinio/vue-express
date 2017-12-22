<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-4"/>
    </v-flex>
  </v-layout>
</template>

<script>
  /* eslint-disable */
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel.vue'
import SongsSearchPanel from './SongsSearchPanel.vue'

  export default {
    components: {
      SongsPanel,
      SongsSearchPanel
    },
    data () {
      return {
        songs: null
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
