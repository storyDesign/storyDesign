<template>
<section>
<div class="story_content">
  <h1 class="title">{{story.title}}</h1>
  <img src="@/assets/images/story/05/1.jpg" class="img-fluid"/>
  <img src="@/assets/images/story/05/1.jpg" class="img-fluid"/>
  <img src="@/assets/images/story/05/1.jpg" class="img-fluid"/>
  <img src="@/assets/images/story/05/1.jpg" class="img-fluid"/>
  <img src="@/assets/images/story/05/1.jpg" class="img-fluid"/>
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      story: {},
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
