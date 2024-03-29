import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //en rutas pasamos objetos, y cada objeto representa una ruta
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
