<template>
<div class="va-side-main">
  <h6 class="va-side-title">Main</h6>
  <ul class="va-side-menu">
    <li><router-link to="/dashboard" class="menu-item"><svg class="va-icon" aria-hidden="true"><use
      xlink:href="#if-dashboard"></use></svg> <span class="item-name">Dashboard</span></router-link></li>
    <li><router-link to="/report" class="menu-item"><svg class="va-icon" aria-hidden="true"><use
      xlink:href="#if-chart"></use></svg> <span class="item-name">Reports</span></router-link></li>
    <li><router-link to="/table" class="menu-item"><svg class="va-icon" aria-hidden="true"><use
      xlink:href="#if-table"></use></svg> <span class="item-name">Tables</span></router-link></li>
    <li><router-link to="/others" class="menu-item"><svg class="va-icon" aria-hidden="true"><use
      xlink:href="#if-apps"></use></svg> <span class="item-name">Others</span></router-link></li>
  </ul>
</div>
</template>

<script>
import VaSideMenuItem from './VaSideMenuItem'
export default {
  name: 'VaSideMenu',
  components: { VaSideMenuItem }
}
</script>
