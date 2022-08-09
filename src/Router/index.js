import Vue from 'vue';
import Router from 'vue-router';
import TheHome from '@/view/TheHome.vue';
import ListCharacters from '@/components/ListCharacters.vue';
import PaginationtheCharacter from '@/components/PaginationtheCharacter.vue';
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
    },
    {
      path: '/ListCharacters',
      name: 'ListCharacters',
      component: ListCharacters,
      props: '',
      children: [
        {
          path: '/:PaginationtheCharacter',
          name: 'PaginationtheCharacter',
          component: PaginationtheCharacter,
          props: true,
        },
      ],
    },
  ],
});
