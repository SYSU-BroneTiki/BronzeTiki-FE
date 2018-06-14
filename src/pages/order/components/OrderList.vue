<template>
  <div class="container">
    <header class="navbar">
      <el-row>
        <el-col :span="3">
          <i class="el-icon-back"></i>
        </el-col>
        <el-col :span="18">
          我的电影订单
        </el-col>
      </el-row>
    </header>
    <section class="item-list">
      <div class="item">
        <el-row class="count-down">支付剩余时间: 09:00</el-row>
        <el-row class="item-detail">
          <el-col :span="5" class="item-post">
            <img class="movie-post" src="//p1.meituan.net/148.208/movie/899b0a8c57fc44e93e83b9f0dae649f1767221.jpg" alt="movie">
          </el-col>
          <el-col :span="14" class="item-info">
            <el-row class="item-brief">
              <el-col :span="12" class="item-name">厕所英雄</el-col>
              <el-col :span="12" class="item-num">2张</el-col>
            </el-row>
            <el-row class="item-date">
              2018-06-09 周六 10：45
            </el-row>
            <el-row class="item-seats">2号厅 5排5座 5排6座</el-row>
          </el-col>
          <el-col :span="5" class="pay-btn-wrap">
            <div class="pay-btn">付款</div>
          </el-col>
        </el-row>
        <el-row class="item-state">
          <el-col :span="12">总价: <span class="price">￥70.00</span></el-col>
          <el-col :span="12" class="state">未支付</el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OrderList'
}
</script>

<style lang="stylus" scoped>
.container
  .navbar
    position: fixed
    top: 0
    left: 0
    right: 0
    text-align: center
    background-color: #00b6f0
    color: #fff
    font-size: 0.4rem
    line-height: 1.0rem
  .item-list
      margin-top: 1rem
      .item
        margin-left: 0.2rem
        margin-right: 0.2rem
        // background-color: lightgrey
        .count-down
          margin-top: 1.0rem
          margin-bottom: 0.1rem
          color: red
          font-size: 0.26rem
          line-height: 0.46rem
          text-align: center
        .movie-post
          width: 100%
        .item-info
          padding-left: 0.24rem
          .el-row
            margin-bottom: 0.1rem
          .item-brief
            font-size: 0.36rem
            line-height: 0.4rem
          .item-date
            font-size: 0.28rem
            line-height: 0.4rem
            color: #888
          .item-seats
            font-size: 0.28rem
            line-height: 0.4rem
            color: #888
        .pay-btn-wrap
          .pay-btn
            color: #fff
            background-color: #00B6F0
            text-align: center
            font-size: 0.3rem
            line-height: 0.5rem
            border-radius: 0.1rem
            margin-top: 0.5rem
            margin-left: 0.1rem
        .item-state
          padding-top: 0.2rem
          padding-bottom: 0.1rem
          color: #888
          font-size: 0.3rem
          line-height: 0.4rem
          // text-align: center
          .price
            font-size: 0.36rem
            color: #000
          .state
            text-align: right
</style>
