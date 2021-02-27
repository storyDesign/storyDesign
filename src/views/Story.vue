<template>
<section class="wrapper">
<div class="story_content animate__animated animate__fadeIn">
  <h1 class="title">{{story.title}}</h1>
  <h2 class="title">{{story.subTitle}}</h2>
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
    <li v-if="story.image06">
      <img :src="`/storyDesign/images/story/${story.image06}`" class="img-fluid"/>
    </li>
    <li v-if="story.image07">
      <img :src="`/storyDesign/images/story/${story.image07}`" class="img-fluid"/>
    </li>
  </ul>
  <a :href="story.demo" target="_blank" class="demo" v-if="story.demo">網站範例</a>
  <div class="moreBox">
    <router-link to="/" class="more">查看更多</router-link>
  </div>
</div>
<div class="arrow next" @click="nextPage">
  <i class="fas fa-long-arrow-alt-right"></i>
</div>
<div class="arrow prev" @click="prevPage">
  <i class="fas fa-long-arrow-alt-left"></i>
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
      story: [],
      idx: 0,
      next: 0,
      prev: 0,
    };
  },
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      const loader = this.$loading.show();
      this.$http.get('/storyDesign/data/db.json').then((res) => {
        this.stories = res.data.stories;
        res.data.stories.forEach((item, idx) => {
          if (item.id === this.$route.params.id) {
            loader.hide();
            this.story = item;
            this.idx = idx;
          }
        });
      }).catch((error) => {
        console.log(error);
      });
    },
    nextPage() {
      const storiesNum = this.stories.length;
      this.next = this.idx + 1;
      if (this.next !== storiesNum) {
        this.$router.push(`/story/${this.stories[this.next].id}`);
        this.getStories();
      }
    },
    prevPage() {
      this.prev = this.idx - 1;
      if (this.prev >= 0) {
        this.$router.push(`/story/${this.stories[this.prev].id}`);
        this.getStories();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.story_content {
  margin: 2rem auto;
  max-width: 1000px;
  width: 92%;
}
.imgs_box {
  list-style: none;
  text-align: center;
  padding-left: 0;
  li {
    margin-bottom: 60px;
  }
}
.title {
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: normal;
}
.demo {
  width: 200px;
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  color: #333333;
  border: 1px solid #333333;
  display: block;
  margin-bottom: 100px;
  transition: all .2s ease-in-out;
  &:hover {
    color: #FFF;
    background-color: #b67359;
  }
}
.moreBox {
  width: 100%;
  border-top: 1px solid #cfcfcf;
  padding-top: 50px;
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
  transition: all .2s ease-in-out;
  &:hover {
    color: #FFF;
    background-color: #b67359;
  }
}
@media screen and (min-width: 768px)
 {
   .arrow {
    position: fixed;
    top: 50%;
    font-size: 2.5rem;
    color: #b47055;
    display: block;
    cursor: pointer;
    opacity: .5;
    transition: all .35s ease-in-out;
    &.next {
      right: 5%;
      &:hover {
        transform: translateX(20px);
      }
    }
    &.prev {
      left: 5%;
      &:hover {
        transform: translateX(-20px);
      }
    }
    &:hover {
      opacity: 1;
    }
}
}
</style>
