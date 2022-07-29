import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './theme/variables.scss'

const app = createApp(App).use(router)

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