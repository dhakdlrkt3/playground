import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'

library.add(faStar)
library.add(faStarReg)

const app = createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

app.directive('background-color', {
  beforeMount: (el, binding, vnode) => {
    
    el.style.background = binding.value
  },
  
  updated: (el, binding, vnode) => {
    // console.log('el => ', el)
    // console.log('binding => ', binding)
    // console.log('vnode => ', vnode)
    el.style.background = binding.value
  },
})