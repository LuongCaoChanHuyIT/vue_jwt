import { createApp } from 'vue'
import {router} from './routers'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
