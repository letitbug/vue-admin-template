<template>
<div class="va-side-main">
  <h5 class="va-side-title">Main</h5>
  <ul class="va-side-menu">
    <li class="menu-item"><svg class="va-icon" aria-hidden="true"><use xlink:href="#if-dashboard"></use></svg> Dashboard</li>
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
