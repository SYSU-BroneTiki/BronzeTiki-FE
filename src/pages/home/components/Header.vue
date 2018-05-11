<template>
  <el-row class="header-row">
    <el-col class="header-left" :span="4">
      <i class="el-icon-back"></i>
    </el-col>
    <el-col class="header-title" :span="16">
      首页
    </el-col>
    <el-col class="header-right" :span="4">
      <i class="el-icon-search"></i>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- html font-size = 50px = 1rem -->
<style lang="stylus" scoped>
  @import '../../../assets/variables.styl'
  .header-row
    background: $bgColor
    font-size: 0.6rem
    text-align: center
    padding-top: 0.5rem
    padding-bottom: 0.5rem
    .header-title
      font-size: 0.45rem
</style>
