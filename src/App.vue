<template id = "app">
<v-app>
  <v-content>
    <MainHeader />
    <router-view />
    <go-top bg-color="#aed581"></go-top>
    <MainFooter />
  </v-content>
</v-app>
</template>

<script>
import VueQuillEditor from 'vue-quill-editor'
import GoTop from '@inotom/vue-go-top'
import home from './views/HomePage.vue'
import MainHeader from './components/MainHeader'
import MainFooter from './components/MainFooter'
import 'font-awesome/css/font-awesome.css'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

new Vue({
  created: function () {
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // 크롬 브라우저 체크
    if(!isChrome){
      alert("해당 사이트는 크롬에 최적화 되어 있습니다.");
    }
  }
})
export default {
  el: '#app',
  components: {
    MainHeader,
    router,
    MainFooter,
    GoTop,
    quillEditor
  }

}
</script>
