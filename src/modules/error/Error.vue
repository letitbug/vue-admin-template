<template>
<div class="va-error-wrapper">
  <img :src="flag" alt=""><br>
  Router error 404
</div>
</template>

<script>
export default {
  name: 'Error',
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
}
</style>
