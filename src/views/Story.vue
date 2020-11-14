<template>
<section class="wrapper">
<div class="story_content">
  <h1 class="title">{{story.title}}</h1>
  <template v-if="story.image01">
    <img :src="`/images/story/${story.image01}`" class="img-fluid"/>
  </template>
  <template v-if="story.image02">
    <img :src="`/images/story/${story.image02}`" class="img-fluid"/>
  </template>
  <template v-if="story.image03">
    <img :src="`/images/story/${story.image03}`" class="img-fluid"/>
  </template>
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
      this.$http.get('/api/db.json').then((res) => {
        res.data.stories.forEach((item) => {
          if (item.id === Number(this.$route.params.id)) {
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

<style>
.story_content {
  margin: 2rem auto;
  max-width: 1200px;
}
.title {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: normal;
}
</style>
