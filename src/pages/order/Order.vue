<template>
  <div class="container">
    <order-confirm></order-confirm>
    <!-- <order-list></order-list> -->
  </div>
</template>

<script>
import OrderConfirm from './components/OrderConfirm.vue'
import OrderList from './components/OrderList.vue'
export default {
  name: 'Order',
  components: {
    OrderConfirm,
    OrderList
  }
}
</script>

<style lang="stylus" scoped>

</style>
