import { createApp } from 'vue'
import { createPinia } from 'pinia'
import home from './views/home.vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'

const app = createApp(App)

app.component('home', home)
app.use(createPinia())
app.use(router)
app.mount('#app')
