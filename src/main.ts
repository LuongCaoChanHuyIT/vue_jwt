// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './routers';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// Icons
import '@mdi/font/css/materialdesignicons.css';
import 'boxicons/css/boxicons.min.css';

// Morris.js CSS
// import 'morris.js/morris.css';

// Custom styles
import '@/assets/css/style.min.css';
import '@/assets/css/icons.min.css';
import '@/style.css';

// Waves effect
import Waves from 'node-waves';
import 'node-waves/dist/waves.min.css';

// Config (nếu có)
import '@/assets/js/config.js';

import App from './App.vue';

// Make Bootstrap globally available
window.bootstrap = bootstrap;

// Initialize Waves
Waves.init();

// Create app
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
