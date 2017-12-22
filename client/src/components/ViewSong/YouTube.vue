<template>
  <panel title="Youtube">
    <iframe :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
  </panel>
</template>

<script>
  /* eslint-disable */
  import Panel from '../globals/Panel.vue'

  export default {
    props: [
      'youtubeId'
    ],
    components: {
      Panel
    },
    computed: {
      youtubeUrl () {
        return 'https://www.youtube.com/embed/' + this.youtubeId
      }
    }
 }
</script>

<style scoped>

</style>
