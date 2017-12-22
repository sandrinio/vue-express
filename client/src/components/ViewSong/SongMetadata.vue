<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
      </v-flex>

      <v-btn class="cyan"
             dark
             small
             @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">
        Edit
      </v-btn>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImg" alt="shizika">
        <br>
        {{ song.album }}
      </v-flex>

    </v-layout>
  </panel>
</template>

<script>
  /* eslint-disable */
  import Panel from '../globals/Panel.vue'

  export default {
    props: [
      'song'
    ],
    components: {
      Panel
    },
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>
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
