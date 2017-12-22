// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: false })
Vue.component('panel', Panel)

sync(store, router)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
