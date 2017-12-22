<template>
  <v-layout>
    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar">
      {{ snackText }}
      <v-btn flat color="pink" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-flex xs4>
      <panel title="Add a song">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album image link"
          v-model="song.albumImg"
          required
          :rules="[required]"
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
          v-model="song.lyrics"
          multi-line
        ></v-text-field>

        <v-text-field
          label="Tab"
          v-model="song.tab"
          multi-line
        ></v-text-field>
      </panel>
      <v-btn class="cyan" light medium right middle @click="save">Save</v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
  /* eslint-disable */
  import Panel from '@/components/globals/Panel'
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
        },
        required: (value) => !!value || 'Required!',
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
        snackText: ''
      }
    },
    components: {
      Panel
    },
    methods: {
      async save() {
        const allFieldsFilled = Object
          .keys(this.song)
          .every(key => !!this.song[key])

        if(!allFieldsFilled) {
          this.snackText = 'Please fill all fields'
          this.snackbar = true
        }
        try {
          const songId = this.$store.state.route.params.songId
          await SongsService.put(this.song)
          this.$router.push({
            name: 'song-view',
            params: {
            songId: songId
            }
          })
        }catch (err) {
          console.log(err)
        }
      },
      navigateTo (route) {
        this.$router.push(route)
      }
    },
    async mounted () {
      try {
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
      }catch(err){
        console.log(err)
      }
    }
  }
</script>

<style scoped>

</style>
