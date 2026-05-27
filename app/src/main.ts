import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './styles/guide.css'

createApp(App).use(router).mount('#app')
