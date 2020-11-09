import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
// axios.defaults.baseURL = 'http://localhost:8080'; // 设置一个类似base_url的请求路径
// global.axios = axios; // 设置一个全局axios便于调用
// axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
