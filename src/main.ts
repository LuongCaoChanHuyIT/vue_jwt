import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './routers';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

// Icons
import '@mdi/font/css/materialdesignicons.css';
import 'boxicons/css/boxicons.min.css';

// Custom styles
import '@/assets/css/style.min.css';
import '@/assets/css/icons.min.css';
import '@/style.css';

// Waves effect
// import Waves from 'node-waves';
import 'node-waves/dist/waves.min.css';

// SimpleBar for scrollable areas
// import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';

// Morris Charts (you'll need to install these)
// npm install morris.js raphael
// import 'morris.js/morris.css';
import '@/assets/js/config.js';

import App from './App.vue';

// Make Bootstrap globally available
window.bootstrap = bootstrap;

// Initialize app
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');

// // Initialize components after mount
// app.config.globalProperties.$nextTick(() => {
//   // Initialize Waves
//   Waves.init();

//   // Initialize SimpleBar
//   document.querySelectorAll('[data-simplebar]').forEach((el) => {
//     new SimpleBar(el as HTMLElement);
//   });

//   // Initialize sidebar toggle
//   const toggleButton = document.querySelector('.button-toggle-menu');
//   const layoutWrapper = document.querySelector('.layout-wrapper');

//   if (toggleButton && layoutWrapper) {
//     toggleButton.addEventListener('click', () => {
//       layoutWrapper.classList.toggle('sidebar-collapsed');
//     });
//   }

//   // Initialize theme mode toggle
//   const themeToggle = document.getElementById('theme-mode');
//   if (themeToggle) {
//     themeToggle.addEventListener('click', () => {
//       document.body.classList.toggle('dark-mode');
//       const icon = themeToggle.querySelector('i');
//       if (icon) {
//         icon.classList.toggle('bx-moon');
//         icon.classList.toggle('bx-sun');
//       }
//     });
//   }

//   // Initialize fullscreen toggle
//   const fullscreenBtn = document.querySelector('[data-bs-toggle="fullscreen"]');
//   if (fullscreenBtn) {
//     fullscreenBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen();
//       } else {
//         document.exitFullscreen();
//       }
//     });
//   }
// });
