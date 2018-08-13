<template>
  <div class="va-app-wrapper" :class="device + ' ' + sidebarStatus">
    <va-side-bar></va-side-bar>
    <div class="va-side-backdrop" @click.prevent="closeSidebar"></div>
    <div class="va-main-wrapper">
      <va-head-bar></va-head-bar>
      <va-tabs-bar></va-tabs-bar>
      <app-body></app-body>
      <va-foot-bar></va-foot-bar>
    </div>
  </div>
</template>

<script>
import { VaSideBar, VaHeadBar, VaTabsBar, VaFootBar,Breadcrumb,  AppBody } from './components'
import SidebarResizeHandler from '@/mixins/SidebarResizeHandler'

export default {
  name: 'Layout',
  components: { VaSideBar, VaHeadBar, VaTabsBar, VaFootBar, Breadcrumb, AppBody },
  mixins: [SidebarResizeHandler],
  computed: {
    sidebarOpened() { return this.$store.state.application.sidebar.opened },
    sidebarStatus() { return 'sidebar-' + (this.sidebarOpened ? 'expanded' : 'collapse') },
    device() { return this.$store.state.application.device }
  },
  methods: {
    toggleDevice() { this.device = this.device === 'desktop' ? 'mobile' : 'desktop' },
    closeSidebar() { this.$store.dispatch('app_sidebar_close') }
  }
}
</script>

<style scoped>

</style>
