<template id = "app">
  <v-app>
    <v-content>
      <MainHeader/>
      <router-view/>
      <MainFooter/>
    </v-content>
  </v-app>
</template>

<script>
import home from './views/HomePage.vue'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import 'font-awesome/css/font-awesome.css'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vue from 'vue'

export default {
  el : '#app',
  components: {
    MainHeader,
    router,
    MainFooter
  }

}
</script>
