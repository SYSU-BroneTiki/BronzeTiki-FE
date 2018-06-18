<template>
  <div id="app">
    <!-- 当前路由地址对应的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 验证登陆状态
  created () {
    this.$store.dispatch('GET_USER_INFO')
  }
}
</script>

<style lang="stylus" scoped>
</style>
