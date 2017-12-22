<template>
  <panel title="Search">
    <v-text-field
      label="Search by title, genre or album"
      v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
  /* eslint-disable */
  import Panel from '@/components/globals/Panel'

  export default {
    components: {
      Panel
    },
    data () {
      return {
        search: ''
      }
    },
    watch: {
      search (value) {
        const route = {
          name: 'songs'
        }
        if(this.search !== '') {
          route.query = {
           search: this.search
          }
        }
        this.$router.push(route)
      },
      '$route.query.search': {
        immediate: true,
        handler (value) {
          this.search = value
        }
      }
    }
  }
</script>

<style scoped>

</style>
