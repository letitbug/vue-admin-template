<template>
  <div class="va-head-bar">
    <br>
    <el-button @click="toggleSidebar">toggle sidebar</el-button>
    <el-button type="primary" plain @click="toggleSidebar">toggle sidebar</el-button>
    <el-button type="success" plain @click="toggleSidebar">toggle sidebar</el-button>
    <el-button type="warning" plain @click="toggleSidebar">toggle sidebar</el-button>
    <el-button type="danger" plain @click="toggleSidebar">toggle sidebar</el-button>
    <el-button type="info" plain @click="toggleSidebar">toggle sidebar</el-button>
  </div>
</template>

<script>
export default {
  name: 'VaHeadBar',
  methods: {
    toggleDevice() { this.$store.dispatch('app_device_toggle') },
    toggleSidebar() { this.$store.dispatch('app_sidebar_toggle') }
  }
}
</script>
