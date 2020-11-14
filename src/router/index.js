import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/shared/Layout.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '',
        name: 'Stories',
        component: () => import('../views/Stories.vue'),
      },
      {
        path: 'story/:id',
        name: 'Story',
        component: () => import('../views/Story.vue'),
      },
      {
        path: 'help',
        name: 'Help',
        component: () => import('../views/Help.vue'),
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('../views/Admin.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
