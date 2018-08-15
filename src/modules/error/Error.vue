<template>
<div class="va-error-wrapper">
  <img :src="flag" alt=""><br>
  <h4 style="margin: 0">Oops! 404 !!!</h4>
  <h5>The page you want to see may have moved...</h5>
  <va-copyright></va-copyright>
</div>
</template>

<script>
import VaCopyright from '@/components/copyright/VaCopyright'
export default {
  name: 'Error',
  components: { VaCopyright },
  data() {
    return {
      code: 404,
      flag: ''
    }
  },
  created() {
    const random = Math.floor(Math.random() * 4 + 1)
    this.flag = require('@/assets/flags/errors/' + this.code + '-' + random + '.gif')
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";
.va-error-wrapper {
  display: flex;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: $spacer-base $spacer-base $spacer-xxl * 3;
  background-color: $color-white;
  text-align: center;
  position: relative;

  .va-copyright {
    position: absolute;
    bottom: $spacer-base;
    left: 0;
    right: 0;
  }
}
</style>
