/**
 * ResizeHandler.
 * @author: gzb
 * @date: 2018-06-17 02:38
 */

import store from '@/store'

const { body } = document
const WIDTH = 768

export default {
  watch: {
    $route() {
      // Auto close sidebar in mobile device
      if (this.isMobile() && this.sidebarOpened) store.dispatch('app_sidebar_close')
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      store.dispatch('app_device_toggle', 'mobile')
    }
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width <= WIDTH
    },
    resizeHandler() {
      const isMobile = this.isMobile()
      store.dispatch('app_device_toggle', isMobile ? 'mobile' : 'desktop')

      if (isMobile) store.dispatch('app_sidebar_close')
      // else store.dispatch('app_sidebar_open')
    }
  }
}
