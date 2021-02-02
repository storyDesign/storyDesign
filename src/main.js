import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Loading, {
  canCancel: false,
  color: '#b7755b',
  loader: 'bars', // spinner/dots/bars
  width: 100,
  height: 100,
  backgroundColor: '#ffffff',
  isFullPage: true,
  opacity: 0.8,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
