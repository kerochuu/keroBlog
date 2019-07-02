<template>
  <v-toolbar
  class = "light-green lighten-2"
  fixed = "true"
  >
    <v-toolbar-title class="headline">
      <v-btn
        flat
        href="http://localhost:8080"

      >
      <span>SSAFY </span>
      <span class="font-weight-light"> -  kerochuu의 블로그</span>
    </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="/post"
    >
      <span class="mr-2">post</span>
      </v-btn>
    <v-btn
      flat
      href="/portfolio"
    >
      <span class="mr-2">portfolio</span>
      </v-btn>
    <v-btn
      flat
      href="/login"
      target="_blank"
    >
      <span class="mr-2">login</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoped>
</style>
