<template>
  <div class="home">
    <el-container>
      <el-header>
        <home-header></home-header>
      </el-header>
      <el-main>
        <home-list></home-list>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeList from './components/List'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeList
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background: #E3EBF7
  .el-header
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #fff
    padding: 0
    margin-bottom: 0.8rem
  .el-main
    padding: 0.1rem
    overflow: visible
</style>
