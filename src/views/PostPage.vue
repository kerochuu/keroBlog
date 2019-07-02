<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random/1600×900/?city,green">
      <div style="line-height:8vw; color:white; " slot="text">
        <p style="text-shadow: 1px 1px 5px #004d40; font-weight: bold; font-size:8vw;" slot ="text">Post</p></div>
    </ImgBanner>
    <v-container>

      <!-- Post -->
      <v-layout>
        <v-flex xs12>
          <PostList :limits="6" :load-more="true"></PostList>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'

export default {
	name: 'PostPage',
	components: {
		ImgBanner,
		PostList,
	}
}
</script>
