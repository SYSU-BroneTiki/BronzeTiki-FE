<template>
  <div id="app">
    <!-- 当前路由地址对应的内容 -->
    <router-view/>
    <div id="app-nav">
      <bottom-nav></bottom-nav>
    </div>
  </div>
</template>

<script>
import BottomNav from './components/BottomNav'
export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style lang="stylus" scoped>
  #app-nav
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background: #fff
</style>
