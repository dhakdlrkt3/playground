import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import { backColorChange, customLazyLoading } from '@/utils'

library.add(faStar)
library.add(faStarReg)

const app = createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)

app.directive('background-color', backColorChange)
app.directive('custom-lazy', customLazyLoading)

app.mount('#app')
