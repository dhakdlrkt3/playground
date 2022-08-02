import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import { backColorChange, customLazyLoading } from '@/utils'
import VueLazyload from 'vue-lazyload'

library.add(faStar)
library.add(faStarReg)

const app = createApp(App)
  .use(router)
  .use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1,
  })
  .component('font-awesome-icon', FontAwesomeIcon)

app.directive('background-color', backColorChange)
app.directive('custom-lazy', customLazyLoading)

app.mount('#app')
