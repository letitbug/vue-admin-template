<template>
<div class="va-side-main">

  <!-- About main functions -->
  <div class="va-side-nav" ref="menu1">
    <a class="nav-title expander" @click.stop.prevent="expandMenu(1)">
      <va-icon icon="home"></va-icon>
      <span class="item-name">main</span>
      <i class="el-icon-arrow-right expander-icon"></i>
    </a>
    <ul class="nav-dropdown">
      <li><router-link to="/dashboard" class="nav-item">
        <va-icon icon="dashboard"></va-icon> <span class="item-name">dashboard</span>
      </router-link></li>
      <li><router-link to="/report" class="nav-item">
        <va-icon icon="chart"></va-icon> <span class="item-name">reports</span>
      </router-link></li>
      <li><router-link to="/table" class="nav-item">
        <va-icon icon="table"></va-icon> <span class="item-name">tables</span>
      </router-link></li>
      <li><router-link to="/others" class="nav-item">
        <va-icon icon="apps"></va-icon> <span class="item-name">others</span>
      </router-link></li>
    </ul>
  </div>

  <!-- About user guide -->
  <div class="va-side-nav" ref="menu2">
    <a class="nav-title expander" @click.stop.prevent="expandMenu(2)">
      <va-icon icon="setting"></va-icon>
      <span class="item-name">settings</span>
      <i class="el-icon-arrow-right expander-icon"></i></a>
    <ul class="nav-dropdown">
      <li><router-link to="/error/500" class="nav-item">
        <va-icon icon="browser"></va-icon> <span class="item-name">website</span>
      </router-link></li>
      <li><router-link to="/error/403" class="nav-item">
        <va-icon icon="user"></va-icon> <span class="item-name">account</span>
      </router-link></li>
      <li><router-link to="/error/402" class="nav-item">
        <va-icon icon="browser"></va-icon> <span class="item-name">rules</span>
      </router-link></li>
      <li><router-link to="/error/401" class="nav-item">
        <va-icon icon="setting"></va-icon> <span class="item-name">client</span>
      </router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
import VaSideMenuItem from './VaSideMenuItem'

export default {
  name: 'VaSideMenu',
  components: { VaSideMenuItem },
  methods: {
    expandMenu(id) {
      this.$refs['menu' + id].classList.toggle('expanded')
    }
  }
}
</script>
