<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Songs
            <v-btn fab dark color="teal" @click="addASongRoute">
              <v-icon dark>add</v-icon>
            </v-btn>
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2" >
          <ul v-for="song in songs">
            <li>Title: {{ song.title }}</li>
            <li>{{ song.artist }}</li>
            <li>{{ song.album }}</li>
          </ul>
        </div>
      </div>
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
      this.songs = (await SongsService.getAllSongs()).data
      console.log(this.songs)
    },
    methods: {
      addASongRoute () {
        this.$router.push({
          name: "songs-create"
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
