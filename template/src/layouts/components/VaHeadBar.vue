<template>
  <div class="va-head-bar">
    <ul class="va-head-nav">
      <li class="va-nav-item" @click.stop="toggleSidebar">
        <svg class="va-icon" aria-hidden="true"><use
          :xlink:href="sidebarOpend ? '#if-handle-close' : '#if-handle-expand'"></use></svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VaHeadBar',
  computed: {
    sidebarOpend() { return this.$store.state.application.sidebar.opened }
  },
  methods: {
    toggleSidebar() { this.$store.dispatch('app_sidebar_toggle') }
  }
}
</script>
