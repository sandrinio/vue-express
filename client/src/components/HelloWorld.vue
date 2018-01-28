<template>
  <div class="hello">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            transition="fade"
            reverseTransition="fade"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      meetups: [
        { imageUrl: 'https://www.fourseasons.com/content/dam/fourseasons/images/web/NYF/NYF_395crop_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          id: 'dksajdlkasj213',
          title: 'Meetup in NY'
        },
        { imageUrl: 'https://www.fourseasons.com/content/dam/fourseasons/images/web/NYF/NYF_395crop_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          id: 'dksajdsappasj213',
          title: 'Meetup in NY'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
