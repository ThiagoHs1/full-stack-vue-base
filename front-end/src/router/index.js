// Configuração de rotas Vue

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Adicione outras rotas aqui, se necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
