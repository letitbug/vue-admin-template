<template>
  <div class="va-error-wrapper">
    <img :src="flag" alt="" /><br />
    <h4 style="margin: 0">Oops! {{ code }} !!!</h4>
    <h5>{{ notice }}</h5>
    <p>
      <a class="linker" href="/" @click.prevent.stop="$router.go(-1)">BACK</a>
      <router-link class="linker" to="/">HOME</router-link>
    </p>
    <va-copyright />
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
      flag: '',
      notice: ''
    }
  },
  created() {
    this.code = this.$route.params.code
    const random = Math.floor(Math.random() * 4 + 1)
    this.flag = require('@/assets/flags/errors/err-' + random + '.gif')
    this.convertNotice()
  },
  methods: {
    convertNotice() {
      const _normalize = '瞎JB点，这回出错了吧！该！！！'
      const notices = {
        err404: 'The page you want to see may have moved...',
        err403: 'You don\'t have access to this page, do you want it? I won\'t give it to you!!!',
        err402: _normalize,
        err401: 'unauthorized! This requests require authentication.',
        err400: _normalize,
        err500: 'The server broke down and threw an error code at you ...'
      }
      this.notice = notices['err' + this.code]
    }
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

  .linker {
    margin: 0 $spacer-base;
  }
}
</style>
