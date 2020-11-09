<template>
  <div id="app">
    <header class="header d-flex align-items-center justify-content-center">
      <router-link to="/" class="header_logo">
        <img src="./assets/images/logo.png" class="img-fluid">
      </router-link>
    </header>
    <nav class="menu">
      <ul class="menuItems d-flex justify-content-center">
        <router-link tag="li" class="menuItem" to="/">作品案例</router-link>
        <router-link tag="li" class="menuItem" to="/about">關於我們</router-link>
        <router-link tag="li" class="menuItem" to="/about">價目表</router-link>
      </ul>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <div class="footer_logo">
          <img src="./assets/images/logo_footer.png" class="img-fluid">
        </div>
        <p>網站設計 • 平面設計 • 電子商務經營規劃 • 網路行銷 • 關鍵字廣告 • 關鍵字排序</p>
        <p class="footer_contact">
          故事設計工作坊<br/>
          <a href="mailto:storydesign999@gmail.com">storydesign999@gmail.com</a>
          <br/>
        </p>
        <a href="https://www.facebook.com/2think.tw" target="_blank" class="footer_fb">f</a>
        <div>© story_design</div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  @import './assets/css/normalize.css';
  @import './assets/css/style.scss';
</style>
