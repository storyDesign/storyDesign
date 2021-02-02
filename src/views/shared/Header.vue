<template>
  <header class="header">
    <div class="header_logo_box d-flex align-items-center justify-content-center">
      <span class="openMenu" @click="openMenu">
        <i class="fas fa-bars"></i>
      </span>
      <router-link to="/" class="header_logo">
        <img src="@/assets/images/logo.png" class="img-fluid">
      </router-link>
    </div>
    <nav class="menu" ref="menu">
      <span class="closeMenu" @click="closeMenu">
        <i class="fas fa-times"></i>
      </span>
      <ul class="menuItems">
        <router-link tag="li" class="menuItem" to="/">作品參考</router-link>
        <router-link tag="li" class="menuItem" to="/about">關於我們</router-link>
        <router-link tag="li" class="menuItem" to="/offer">價目表</router-link>
        <router-link tag="li" class="menuItem" to="/help">問與答</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$refs.menu.style.width = '100%';
    },
    closeMenu() {
      this.$refs.menu.style.width = 0;
    },
  },
  mounted() {
    const menuItem = document.querySelectorAll('.menuItem');
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  },
};
</script>
