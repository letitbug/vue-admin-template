<template>
<div>
  menu items
</div>
</template>

<script>
export default {
  name: 'VaSideMenuItem',
  props: {
    itemTitle: { type: String, required: true },
    child: { type: Array, required: false, default: () => [] }
  }
}
</script>

<style scoped>

</style>
