<template>
  <div class="header">
    <div class="header-left">header-left</div>
    <div class="header-title">header-title</div>
    <div class="header-right">header-right</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // html font-size = 50px = 1rem
  .header
    height: 1.8rem
    background: #005DFB
    .header-left
      background: red
    .header-title
      background: yellow
    .header-right
      background: gray
</style>
