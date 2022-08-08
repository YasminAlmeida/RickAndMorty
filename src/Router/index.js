import Vue from 'vue';
import Router from 'vue-router';
import TheHome from '@/view/TheHome.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
      props: '',
      // children: [
      //   {
      //     path: '/:aula',
      //     name: 'aula',
      //     component: Aula,
      //     props: true,
      //   },
      // ]
    },
  ],
});
