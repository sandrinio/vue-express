<template>
 <v-layout>
   <v-flex xs4>
      <panel title="Add a song">
          <v-text-field
            label="Title"
            v-model="song.title"
          ></v-text-field>

          <v-text-field
            label="Artist"
            v-model="song.artist"
          ></v-text-field>

          <v-text-field
            label="Genre"
            v-model="song.genre"
          ></v-text-field>

          <v-text-field
            label="Album"
            v-model="song.album"
          ></v-text-field>

          <v-text-field
            label="Album image link"
            v-model="song.albumImg"
          ></v-text-field>

          <v-text-field
            label="Youtube ID"
            v-model="song.youtubeId"
          ></v-text-field>

      </panel>
   </v-flex>
   <v-flex xs8 class="ml-4">
     <panel title="Song Structure">
       <v-text-field
         label="Lyrics"
         v-model="lyrics"
         multiLine="true"
       ></v-text-field>

       <v-text-field
         label="Tab"
         v-model="tab"
         multiLine="true"
       ></v-text-field>
     </panel>
     <v-btn class="cyan" dark @click="create">Create</v-btn>
   </v-flex>
</v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import SongsService from '@/services/SongsService'

  export default {
    data () {
      return {
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImg: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        }
      }
    },
    components: {
      Panel
    },
    methods: {
     async create() {
       try {
       this.$router.push({
         name: 'songs'
       });
        await SongsService.createSong(this.song)
       }catch(err){
         console.log(err)
       }
      }
    }
  }
</script>

<style scoped>

</style>
