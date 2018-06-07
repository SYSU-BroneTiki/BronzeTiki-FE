<template>
  <div class="item-content">
    <div>日期</div>
    <div class="date-selection">
      <el-button type="primary" round>Today</el-button>
      <el-button type="primary" round>Tomorrow</el-button>
      <el-button type="primary" round>Today</el-button>
      <el-button type="primary" round>Tomorrow</el-button>
      <el-button type="primary" round>Today</el-button>
      <el-button type="primary" round>Tomorrow</el-button>
      <el-button type="primary" round>Today</el-button>
      <el-button type="primary" round>Tomorrow</el-button>
    </div>
    <div>场次</div>
    <div class="time-selection">
      <el-button type="primary" round>8:00</el-button>
      <el-button type="primary" round>12:00</el-button>
      <el-button type="primary" round>19:00</el-button>
    </div>
    <div style="text-align: center">
      <el-button type="danger" round>确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Screen'
}
</script>

<style lang="stylus" scoped>
  .item-content
      font-size: 0.3rem
      font-weight: bold
      margin-left: 0.2rem
      .date-selection
      .time-selection
        display:flex !important
        overflow-x: scroll
        margin-bottom: 0.1rem
</style>
