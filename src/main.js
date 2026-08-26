import { createApp } from 'vue'
import { createPinia } from 'pinia'
import home from './views/home.vue'
import App from './App.vue'

const app = createApp(App)

app.component('home', home)
app.use(createPinia())

app.mount('#app')
