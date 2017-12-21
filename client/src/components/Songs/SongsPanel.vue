<template>
  <panel title="Songs">
    <v-btn class="green" fab light medium right middle @click="navigateTo({name: 'songs-create'})">
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            <router-link :to="{name: 'song-view', params: {songId: song.id}}">{{ song.title }}</router-link>
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>
          <v-btn class="cyan"
                 dark
                 small
                 @click="navigateTo({
                  name: 'song-view',
                  params: {
                    songId: song.id
                  }})"
          >More
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImg" alt="shizika">
        </v-flex>
      </v-layout>
    </div>
  </panel>
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
