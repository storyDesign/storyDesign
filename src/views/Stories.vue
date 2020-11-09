<template>
<section>
  <div class="d-flex flex-wrap">
    <router-link v-for="story in stories" :key="story.id + story.title"
    :to="`/story/${story.id}`" tag="figure" class="figure">
      <img :src="`${story.pictrue}`" class="img-fluid"/>
      <figcaption class="figcaption">{{ story.title }}</figcaption>
    </router-link>
  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      stories: [],
    };
  },
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      this.$http.get('/storyDesign/dist/data/db.json').then((res) => {
        this.stories = res.data.stories;
        console.log(this.stories);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.figure {
  width: 25%;
  background-color: #333;
  position: relative;
  line-height: 0;
  overflow: hidden;
  cursor: pointer;
  &:hover img {
    filter: blur(2px);
    -webkit-filter: blur(2px);
    opacity: .8;
  }
  &:hover .figcaption {
    transform: translate3d(0,0%,0);
  }
  img {
    transition: all .2s ease-in-out;
  }
}
.figcaption {
  background-color: rgba(255,255,255,.9);
  width: 100%;
  position: absolute;
  bottom: 0;
  padding-left: 1.5rem;
  line-height: 48px;
  height: 48px;
  transition: all .35s ease;
  transform: translate3d(0,100%,0);
}
</style>
