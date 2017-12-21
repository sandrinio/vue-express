<template>
  <panel title="Tabs">
    {{tabs}}}
  </panel>
</template>

<script>
  import Panel from '../Panel.vue'

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
