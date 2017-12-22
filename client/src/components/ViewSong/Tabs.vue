<template>
  <panel title="Tabs">
    {{tabs}}}
  </panel>
</template>

<script>
  /* eslint-disable */
  import Panel from '../globals/Panel.vue'

  export default {
    props: [
      'tabs'
    ],
    components: {
      Panel
    },
  }
</script>

<style scoped>

</style>
