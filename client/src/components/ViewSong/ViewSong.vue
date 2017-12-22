<template>
  <div>
    <v-layout>
        <v-flex xs6>
          <song-metadata :song="song" />
        </v-flex>

        <v-flex xs6>
            <you-tube class="ml-3" :youtubeId="song.youtubeId" />
        </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <lyrics class="mt-5" :lyrics="song.lyrics" />
      </v-flex>

      <v-flex xs6>
        <tabs class="ml-3 mt-5" :tabs="song.tabs" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  /* eslint-disable */
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/globals/Panel'
  import SongMetadata from './SongMetadata.vue'
  import YouTube from './YouTube.vue'
  import Lyrics from './Lyrics.vue'
  import Tabs from './Tabs.vue'


  export default {
    data () {
      return {
        song: {}
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      const song = (await SongsService.show(songId)).data
      this.song = song
    },
    components: {
      Panel,
      SongMetadata,
      YouTube,
      Lyrics,
      Tabs
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    overflow: auto;
    padding: 20px;
  }

</style>
