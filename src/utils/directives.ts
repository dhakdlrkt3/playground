import { Directive } from 'vue'
export const backColorChange: Directive = {
  beforeMount: (el, binding, vnode) => {
    el.style.background = binding.value
  },
  
  updated: (el, binding, vnode) => {
    el.style.background = binding.value
  },
}

export const customLazyLoading: Directive = {
  beforeMount: (el, binding, vnode) => {
    el.style.background = binding.value
  },
  
  updated: (el, binding, vnode) => {
    el.style.background = binding.value
  },
}