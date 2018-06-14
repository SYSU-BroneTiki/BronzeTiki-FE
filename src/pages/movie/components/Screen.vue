<template>
  <div class="container">
    <header class="navbar">
      <el-row class="header-row">
        <el-col class="header-left" :span="4">
          <i class="el-icon-back"></i>
        </el-col>
        <el-col class="header-title" :span="16">场次选择</el-col>
      </el-row>
    </header>
    <section class="movie-post">
      <img src="//p0.meituan.net/148.208/movie/200526fd0facc141caeef984314f7ef8328722.jpg" alt="post">
    </section>
    <section class="screen-select">
      <el-tabs type="border-card">
        <el-tab-pane label="今天" name="tab1">
          <div class="screen-item">
            <el-row>
              <el-col :span="5" class="screen-time">
                <el-row class="begin">08:00</el-row>
                <el-row>-</el-row>
                <el-row class="end">10:00</el-row>
              </el-col>
              <el-col :span="7" class="screen-hall">4号厅</el-col>
              <el-col :span="7" class="price">￥42.00</el-col>
              <el-col :span="5" class="buy-btn-wrap">
                <div class="buy-btn">购票</div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Screen'
}
</script>

<style lang="stylus" scoped>
  .container
    .navbar
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
    .movie-post
      margin-top: 1rem
      height: 3rem
      text-align: center
      img
        height: 100%
        width: 100%
    .screen-select
      margin-top: 0.2rem
      .screen-item
        padding-top: 0.2rem
        padding-bottom: 0.2rem
        border-bottom: 0.02rem solid lightgrey
        .screen-hall
          font-size: 0.3rem
          line-height: 0.8rem
        .price
          line-height: 0.8rem
        .buy-btn-wrap
          .buy-btn
            background-color: #00b6f0
            color: #fff
            line-height: 0.5rem
            border-radius: 0.1rem
            text-align: center
            margin-top: 0.14rem
</style>
