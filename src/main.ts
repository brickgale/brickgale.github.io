import { createApp } from 'vue'
import router from './router'
import App from './app/index.vue'

createApp(App)
    .use(router)
    .mount('#app')
