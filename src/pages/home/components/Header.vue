<template>
  <div class="header">
    <el-row class="header-row">
      <el-col class="header-left" :span="4">
        <i class="el-icon-back"></i>
      </el-col>
      <el-col class="header-title" :span="16">影片资讯</el-col>
      <el-col class="header-right" :span="4">
        <i class="el-icon-search"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<!-- html font-size = 50px = 1rem -->
<style lang="stylus" scoped>
  @import '../../../assets/variables.styl'
  .header
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif
    background: #00b6f0
    color: #fff
    font-size: 0.4rem
    text-align: center
    line-height: 1.0rem
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 1
</style>
