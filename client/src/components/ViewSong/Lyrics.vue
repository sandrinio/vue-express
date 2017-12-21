<template>
  <panel title="lyrics">
    {{lyrics}}}
  </panel>
</template>

<script>
  import Panel from '../Panel.vue'

  export default {
    props: [
      'lyrics'
    ],
    components: {
      Panel
    },
  }
</script>

<style scoped>

</style>
