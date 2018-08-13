<template>
  <div class="va-sidebar">
    <div class="va-side-brand">
      <img class="brand-logo" :src="logo" alt="">
      <div class="brand-name">VA MINI</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaSideBar',
  data() {
    return {
      logo: require('@/assets/logo.png')
    }
  }
}
</script>
