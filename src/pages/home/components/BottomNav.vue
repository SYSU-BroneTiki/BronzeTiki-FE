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
    background-color: #00B6F0
    font-size: 0
    position: fixed
    left: 0
    right: 0
    bottom: 0
    .icon-left
    .icon-right
      display: inline-block
      width: 50%
      color: #eee
      text-align: center
      font-size: 0.6rem
      line-height: 0.8rem
</style>
