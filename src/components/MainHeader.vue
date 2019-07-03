<template>
<v-toolbar class="light-green lighten-2" fixed="true">
  <v-toolbar-title class="headline">
    <v-btn flat href="/">
      <span>kerochuu </span>
    </v-btn>
  </v-toolbar-title>
  <v-spacer></v-spacer>

  <v-btn flat href="JavaScript:window.external.AddFavorite('http://blog.naver.com/kerochuu','케로츄 블로그')" class="hidden-sm-and-down">
    <span class="mr-2">bookMark</span>
  </v-btn>
  <v-btn flat href="/post" class="hidden-sm-and-down">
    <span class="mr-2">post</span>
  </v-btn>
  <v-btn flat href="/portfolio" class="hidden-sm-and-down">
    <span class="mr-2">portfolio</span>
  </v-btn>
  <v-btn flat href="/login" target="_blank" class="hidden-sm-and-down">
    <span class="mr-2">login</span>
  </v-btn>

  <quick-menu class="hidden-md-and-up" backgroundColor="#689f38" position="top-right" :menu-count='4' :icon-class="icons" :menu-url-list="list"></quick-menu>





</v-toolbar>
</template>

<script>
import quickMenu from 'vue-quick-menu'
import 'font-awesome/css/font-awesome.css'
import '../plugins/vuetify'



export default {
  name: 'main-header',
  data: () => ({
    icons: [
      'fa fa-star',
      'fa fa-edit',
      'fa fa-id-card',
      'fa fa-user'
    ],
    list: [
      {
        'isLink': true,
        url: "/"
      },
      {
      'isLink': true,
      url: "/post"
    }, {
      'isLink': true,
      url: "/portfolio"
    }, {
      'isLink': true,
      url: "/login"
    }]
  }),
  components: {
    quickMenu
  }
}
</script>

<style scoped>
</style>
