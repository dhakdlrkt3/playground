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
    const options = {
      root: document,
      rootMargin: '500px 0px', 
    }

    const placeholderEl = document.createElement('div')  
    placeholderEl.setAttribute('style', 'position: absolute; top: 0; left: 0; right: 0; bottom:0; background-color: #ccc;transition : opacity 1s ease-in-out;')
    el.appendChild(placeholderEl) 

    el.observer = new IntersectionObserver((changes) => {
      for (const change of changes) {
        if (change.intersectionRatio > 0) {
          el.observer.disconnect()
          el.src = el.dataset.src
        }
      }
    }, options)

    el.observer.observe(el)
  },
}

