<template>
  <div>
    <header-menu/>
    <router-view/>
    <footer-info/>
  </div>
</template>
<script>
import headerMenu from './Header.vue';
import footerInfo from './Footer.vue';

export default {
  components: {
    headerMenu,
    footerInfo,
  },
};
</script>
