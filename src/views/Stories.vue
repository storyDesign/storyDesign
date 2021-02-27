<template>
<section class="wrapper">
  <div class="d-flex flex-wrap animate__animated animate__fadeIn">
    <router-link v-for="story in stories" :key="story.id + story.title"
    :to="`/story/${story.id}`" tag="figure" class="figure">
      <img :src="`/storyDesign/images/stories/${story.pictrue}`" class="img-fluid"/>
      <figcaption class="figcaption">{{ story.title }}</figcaption>
      <div class="desrcBox">
        <div class="desrc">{{story.desre}}</div>
      </div>
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
      const loader = this.$loading.show();
      this.$http.get('/storyDesign/data/db.json').then((res) => {
        this.stories = res.data.stories;
        loader.hide();
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.figure {
  width: 100%;
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
  &:hover .desrcBox {
    opacity: 1;
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
.desrcBox {
  text-align: center;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .35s ease;
  opacity: 0;
}
.desrc {
  background-color: rgba(180,111,84,.9);
  color: #FFF;
  border: 1px solid rgba(255,255,255,.5);
  min-width: 50%;
  height: 105px;
  line-height: 105px;
  padding: 0 10px;
}
@media screen and (min-width: 460px) {
  .figure {
    width: 50%;
  }
}
@media screen and (min-width: 768px) {
  .figure {
    width: 33.3%;
  }
}
@media screen and (min-width: 992px) {
  .figure {
    width: 25%;
  }
}
</style>
