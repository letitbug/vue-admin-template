<template>
<div class="va-side-main">

  <!-- About main functions -->
  <div class="va-side-nav" ref="menu1">
    <a class="nav-title expander" @click.stop.prevent="expandMenu(1)">
      <svg class="va-icon" aria-hidden="true"><use xlink:href="#if-home"></use></svg> <span class="item-name">main</span>
      <i class="el-icon-arrow-right expander-icon"></i>
    </a>
    <ul class="nav-dropdown">
      <li><router-link to="/dashboard" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-dashboard"></use></svg> <span class="item-name">dashboard</span></router-link></li>
      <li><router-link to="/report" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-chart"></use></svg> <span class="item-name">reports</span></router-link></li>
      <li><router-link to="/table" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-table"></use></svg> <span class="item-name">tables</span></router-link></li>
      <li><router-link to="/others" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-apps"></use></svg> <span class="item-name">others</span></router-link></li>
    </ul>
  </div>

  <!-- About user guide -->
  <div class="va-side-nav" ref="menu2">
    <a class="nav-title expander" @click.stop.prevent="expandMenu(2)">
      <svg class="va-icon" aria-hidden="true"><use xlink:href="#if-settings"></use></svg> <span class="item-name">settings</span>
      <i class="el-icon-arrow-right expander-icon"></i></a>
    <ul class="nav-dropdown">
      <li><router-link to="/error/500" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-handle-browse"></use></svg> <span class="item-name">website</span></router-link></li>
      <li><router-link to="/error/403" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-user"></use></svg> <span class="item-name">account</span></router-link></li>
      <li><router-link to="/error/402" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-handle-browse"></use></svg> <span class="item-name">rules</span></router-link></li>
      <li><router-link to="/error/401" class="nav-item"><svg class="va-icon" aria-hidden="true"><use
        xlink:href="#if-settings"></use></svg> <span class="item-name">client</span></router-link></li>
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
