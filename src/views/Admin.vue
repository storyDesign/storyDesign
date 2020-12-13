<template>
  <section class="wrapper">
    <form @submit="addStory">
      <input type="text" v-model="info.title"/>
      <h1>{{info.title}}</h1>
      <button type="submit">OK</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
      info: {
        title: '',
      },
    };
  },
  created() {
    this.getStories();
  },
  methods: {
    getStories() {
      this.$http.get('https://storydesign.github.io/storyDesign/dist/data/db.json').then((res) => {
        this.stories = res.data.stories;
        console.log(this.stories);
      }).catch((error) => {
        console.log(error);
      });
    },
    addStory() {
      const dataInfo = this.info;
      this.$http.post('https://storydesign.github.io/storyDesign/dist/data/db.json', dataInfo).then((res) => {
        console.log(res);
        this.getStories();
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style>

</style>
