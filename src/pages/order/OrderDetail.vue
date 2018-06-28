<template>
  <div class="container">
    订单详情
  </div>
</template>

<script>
export default {
  name: 'OrderDetial',
  mounted () {
    this.$store.dispatch('GET_ORDER', this.$route.params.orderId)
  }
}
</script>

<style lang="stylus" scoped>

</style>
