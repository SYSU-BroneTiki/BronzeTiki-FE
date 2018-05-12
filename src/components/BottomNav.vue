<template>
  <div class="wrapper">
    <router-link to="/home">
      <span class="iconfont icon-left">&#xe62e;</span>
    </router-link>
    <router-link to="/">
      <span class="iconfont icon-right">&#xe62f;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style lang="stylus" scoped>
  .wrapper
    color: #000
    font-size: 0
    .icon-left
    .icon-right
      display: inline-block
      width: 50%
      color: #000
      text-align: center
      font-size: 1rem
      line-height: 1.2rem
</style>
