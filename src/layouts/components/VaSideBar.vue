<template>
  <div class="va-sidebar">
    <div class="va-side-brand">
      <img class="brand-logo" :src="logo" alt="">
      <div class="brand-name">vava mini</div>
    </div>
    <va-side-menu></va-side-menu>
  </div>
</template>

<script>
import VaSideMenu from '@/components/sidebar-menus/VaSideMenu'
export default {
  name: 'VaSideBar',
  components: { VaSideMenu },
  data() {
    return {
      logo: require('@/assets/logo.png')
    }
  }
}
</script>
