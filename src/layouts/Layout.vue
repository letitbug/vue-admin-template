<template>
  <div class="va-app-wrapper" :class="device+ ' ' + sidebarStatus ">
    <va-side-bar></va-side-bar>
    <div class="va-side-backdrop"></div>
    <div class="va-main-wrapper">
      <el-button @click="toggleDevice">toggle device</el-button>
      <el-button type="primary" @click="toggleDevice">toggle device</el-button>
      <el-button type="success" @click="toggleDevice">toggle device</el-button>
      <el-button type="warning" @click="toggleDevice">toggle device</el-button>
      <el-button type="danger" @click="toggleDevice">toggle device</el-button>
      <el-button type="info" @click="toggleDevice">toggle device</el-button>
      <br>
      <br>
      <el-button @click="toggleSidebar">toggle sidebar</el-button>
      <el-button type="primary" plain @click="toggleSidebar">toggle device</el-button>
      <el-button type="success" plain @click="toggleSidebar">toggle device</el-button>
      <el-button type="warning" plain @click="toggleSidebar">toggle device</el-button>
      <el-button type="danger" plain @click="toggleSidebar">toggle device</el-button>
      <el-button type="info" plain @click="toggleSidebar">toggle device</el-button>
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
