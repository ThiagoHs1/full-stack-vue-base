import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

createApp(App)
  .use(router) // Use o roteador na aplicação
  .mount('#app');
