<template>
  <div class="va-app-wrapper" :class="device+ ' ' + sidebarStatus ">
    <va-side-bar></va-side-bar>
    <div class="va-side-backdrop"></div>
    <div class="va-main-wrapper">
      <button @click="toggleDevice">toggle device</button>
      <br>
      <br>
      <button @click="toggleSidebar">toggle sidebar</button>
    </div>
  </div>
</template>

<script>
import { VaSideBar, VaHeadBar, VaTabsBar, VaBreadcrumb, VaFootBar, VaAppBody } from './components'

export default {
  name: 'Layout',
  components: { VaSideBar, VaHeadBar, VaTabsBar, VaBreadcrumb, VaFootBar, VaAppBody },
  data() {
    return {
      sidebarStatus: 'sidebar-expanded',
      device: 'desktop'
    }
  },
  methods: {
    toggleDevice() {
      this.device = this.device === 'desktop' ? 'mobile' : 'desktop'
    },
    toggleSidebar() {
      this.sidebarStatus = this.sidebarStatus === 'sidebar-expanded' ? 'sidebar-collapse' : 'sidebar-expanded'
    }
  }
}
</script>

<style scoped>

</style>
