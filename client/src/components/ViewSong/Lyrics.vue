<template>
  <panel title="lyrics">
    {{lyrics}}}
  </panel>
</template>

<script>
  /* eslint-disable */
  import Panel from '../globals/Panel.vue'

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
