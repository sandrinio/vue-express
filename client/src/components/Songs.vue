<template>

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <ul v-for="song in songs" :key="song.title">
            <li>{{ song.title }}</li>
            <li>{{ song.artist }}</li>
            <li>{{ song.album }}</li>
        </ul>

      </panel>
    </v-flex>
  </v-layout>

</template>

<script>
  import Panel from '@/components/Panel'
  import SongsService from '@/services/SongsService'
  export default {
    components: {
      Panel
    },
    data () {
      return {
        songs: null
      }
    },
    async mounted () {
      this.songs = SongsService.getAllSongs()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
