<template>
<section class="wrapper">
<div class="story_content animate__animated animate__fadeIn">
  <h1 class="title">{{story.title}}</h1>
  <ul class="imgs_box">
    <li v-if="story.image01">
      <img :src="`/storyDesign/images/story/${story.image01}`" class="img-fluid"/>
    </li>
    <li v-if="story.image02">
      <img :src="`/storyDesign/images/story/${story.image02}`" class="img-fluid"/>
    </li>
    <li v-if="story.image03">
      <img :src="`/storyDesign/images/story/${story.image03}`" class="img-fluid"/>
    </li>
    <li v-if="story.image04">
      <img :src="`/storyDesign/images/story/${story.image04}`" class="img-fluid"/>
    </li>
    <li v-if="story.image05">
      <img :src="`/storyDesign/images/story/${story.image05}`" class="img-fluid"/>
    </li>
  </ul>
  <router-link to="/" class="more">查看更多</router-link>
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      story: [],
    };
  },
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      const loader = this.$loading.show();
      this.$http.get('/storyDesign/data/db.json').then((res) => {
        res.data.stories.forEach((item) => {
          if (item.id === this.$route.params.id) {
            loader.hide();
            this.story = item;
          }
        });
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.story_content {
  margin: 2rem auto;
  max-width: 1000px;
}
.imgs_box {
  list-style: none;
  text-align: center;
  padding-left: 0;
  li {
    margin-bottom: 40px;
  }
}
.title {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: normal;
}
.more {
  width: 200px;
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  color: #b67359;
  border: 1px solid #b67359;
  display: block;
  &:hover {
    color: #FFF;
    background-color: #b67359;
  }
}
</style>
