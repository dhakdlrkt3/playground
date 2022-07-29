import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './theme/variables.scss'

createApp(App).use(router).mount('#app')
