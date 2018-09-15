<template>
<div class="va-side-main">

  <div class="va-side-nav">
    <router-link class="nav-title" to="/dashboard">
      <va-icon icon="dashboard"></va-icon> <span class="item-name">dashboard</span>
    </router-link>
  </div>
  <div class="va-side-nav">
    <router-link class="nav-title" to="/report">
      <va-icon icon="chart"></va-icon> <span class="item-name">reports</span>
    </router-link>
  </div>

  <!-- About user guide -->
  <div class="va-side-nav" ref="menu2">
    <a class="nav-title expander" @click.stop.prevent="expandMenu(2)">
      <va-icon icon="terminal"></va-icon>
      <span class="item-name">client</span>
      <i class="el-icon-arrow-right expander-icon"></i>
    </a>
    <ul class="nav-dropdown child-count-3">
      <li><router-link to="/error/500" class="nav-item">
        <va-icon icon="browser"></va-icon> <span class="item-name">website</span>
      </router-link></li>
      <li><router-link to="/error/403" class="nav-item">
        <va-icon icon="user"></va-icon> <span class="item-name">account</span>
      </router-link></li>
      <li><router-link to="/error/402" class="nav-item">
        <va-icon icon="handle-permission"></va-icon> <span class="item-name">Permission</span>
      </router-link></li>
    </ul>
  </div>

  <div class="va-side-nav">
    <router-link class="nav-title" to="/error/401">
      <va-icon icon="others"></va-icon> <span class="item-name">others</span>
    </router-link>
  </div>

  <div class="va-side-nav fixed-bottom">
    <router-link class="nav-title" to="/settings">
      <va-icon icon="settings"></va-icon> <span class="item-name">Settings</span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'VaSideMenu',
  computed: {},
  methods: {
    expandMenu(id) {
      this.$refs['menu' + id].classList.toggle('expanded')
    }
    // TODO Add current route styles '.active' to first level menu.
    // TODO create close & open function with side-menu.
    // TODO Automatically open or close the side menu bar When router changed.
  }
}
</script>
