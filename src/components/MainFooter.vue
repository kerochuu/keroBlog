<template>
<v-footer dark height="auto">
  <v-card class="flex" flat tile>
    <v-card-title class="light-green darken-2">
      <strong class="subheading">문의사항 있으면 연락주세요!</strong>

      <v-spacer></v-spacer>

      <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-actions class="light-green darken-4 justify-center">
      &copy; SSAFY 2019 — <strong>kerochuu</strong>
    </v-card-actions>

  </v-card>
</v-footer>
</template>

<script>
import quickMenu from 'vue-quick-menu'
export default {
  name: 'main-footer',
  data: () => ({
    icons: [
      'fa fa-facebook',
      'fa fa-twitter',
      'fa fa-google-plus',
      'fa fa-linkedin',
      'fa fa-instagram'
    ],
    list: [
      "/post",
      "/post",
      "/post",
      "/post",
      "/post"
    ]
  })
}
</script>

<style scoped>
</style>
