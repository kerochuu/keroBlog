<template>
<div>

  <ImgBanner imgSrc="https://source.unsplash.com/random/1600×900/?city,green">

    <div style="line-height:8vw; color:white; " slot="text">
      <p style="text-shadow: 1px 1px 5px #004d40; font-weight: bold; font-size:8vw;" slot="text">We will find a way.<br> We always have.</p>
    </div>
  </ImgBanner>
  <v-container>
    <!-- About Me -->
    <v-layout my-5>
      <v-flex sm12 xs12 md8 text-xs-center text-sm-center text-md-left>
        <h2 class="headline mb-3">About Me</h2>
        <p class="mr-4" style="font-size:2vw;"> 안녕하세요!! 10조의 김준호입니다~~ <br />알고리즘을 주로 공부하고 있습니다~~<br />잘 부탁드립니다~~</p>
      </v-flex>
      <v-flex md7 hidden-sm-only>
        <v-img :src="getImgUrl('profile.png')" aspect-ratio="1.5" />
      </v-flex>

    </v-layout>

    <!-- Portfolio -->
    <v-layout my-5>
      <v-flex xs12 sm12 md12 text-md-center>
        <h2 class="headline my-5 text-xs-center">Portfolio</h2>
        <PortfolioList></PortfolioList>
      </v-flex>

    </v-layout>


    <!-- Post -->
    <v-layout my-5 class="hidden-sm-and-down">
      <v-flex xs12 sm12 md6>
        <h2 class="headline my-5 text-xs-center">Post</h2>
        <PostList :column="2"></PostList>
      </v-flex>


      <!-- Github -->

      <v-flex xs12 sm12 md6>
        <h2 class="headline my-5 text-xs-center">Project</h2>
        <RepositoryList></RepositoryList>
      </v-flex>
    </v-layout>

    <!-- Post -->
    <v-layout my-5 class="hidden-md-and-up">
      <v-flex xs12 sm12 md6>
        <h2 class="headline my-5 text-xs-center">Post</h2>
        <PostList :column="2"></PostList>
      </v-flex>

    </v-layout>
    <!-- Github -->
    <v-layout my-5 class="hidden-md-and-up">
      <v-flex xs12 sm12 md6>
        <h2 class="headline my-5 text-xs-center">Project</h2>
        <RepositoryList></RepositoryList>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'

export default {
  name: 'HomePage',

  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList
  },
  mounted() {
    this.ta = JSON.stringify(this.$vuetify.breakpoint)
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/' + img)
    }
  },
}
</script>
