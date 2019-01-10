<template>
  <div class="va-foot-bar">
    App foot bar.
    <va-copyright />
  </div>
</template>

<script>
import VaCopyright from '@/components/copyright/VaCopyright'

export default {
  name: 'VaFootBar',
  components: { VaCopyright }
}
</script>
