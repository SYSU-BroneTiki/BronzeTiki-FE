<template>
  <div class="container">
    <header class="navbar">
      <el-row>
        <el-col :span="3">
          <router-link to="/order-list" tag="div">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col :span="18">
          订单确认页面
        </el-col>
      </el-row>
    </header>
    <section class="count-down">
      <i class="el-icon-time"></i>
      支付剩余时间: 09:00
    </section>
    <section class="movie-info">
      <el-row class="movie-name">{{ movieName }}</el-row>
      <el-row class="movie-time">{{ movieBegin }}</el-row>
      <el-row class="seats"> {{ hall }}号厅 {{ seats }}</el-row>
    </section>
    <section class="contract-way">
      <el-row class="phone">
        <el-col :span="6" class="phone-label">手机号码</el-col>
        <el-col :span="16" class="phone-number">{{ phone }}</el-col>
          <!-- <el-col :span="3">
            <i class="el-icon-arrow-right right-icon"></i>
          </el-col> </-->
      </el-row>
    </section>
    <section class="pay-info">
      <el-row>
        <el-col :span="6" class="price-label">总价</el-col>
        <el-col :span="16" class="price-total">￥{{ total }}</el-col>
      </el-row>
    </section>
    <footer class="price-confirm">
      <el-row>
        <el-col :span="12" class="remark">不支持退签、改票</el-col>
        <el-col :span="12">应付<span class="pay-price">￥{{ total }}</span></el-col>
      </el-row>
      <el-row>
        <div class="pay-btn">确认支付</div>
      </el-row>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirm',
  computed: {
    orderId () {
      return this.$store.state.order.orderInfo.orderId
    },
    movieName () {
      return this.$store.state.order.orderInfo.movieName
    },
    movieBegin () {
      return this.$store.state.order.orderInfo.begin
    },
    hall () {
      return this.$store.state.order.orderInfo.hall
    },
    seats () {
      return this.$store.state.order.orderInfo.seats
    },
    phone () {
      return this.$store.state.order.orderInfo.phone
    },
    total () {
      return this.$store.state.order.orderInfo.total
    },
    isPayed () {
      return this.$store.state.order.orderInfo.isPayed
    }
  }
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
    .count-down
      background-color: #FEF3D9
      margin-top: 1.0rem
      color:  #f90
      font-size: 0.26rem
      line-height: 0.76rem
      text-align: center
    .movie-info
      padding: 0.3rem
      // border-bottom: 0.02rem
      .el-row
        margin: 0.16rem 0
      .movie-name
        font-size: 0.3rem
      .movie-time
        color: red
    .contract-way
      padding: 0.3rem
      // text-align: center
      font-size: 0.3rem
      line-height: 0.4rem
      text-align: center
      .phone-label
        text-align: left
      .phone-number
        text-align: right
    .pay-info
      padding: 0.3rem
      font-size: 0.3rem
      line-height: 0.4rem
      .price-total
        text-align: right
        color: red
        font-size: 0.34rem
    .price-confirm
      background-color: white
      position: fixed
      left: 0
      right: 0
      bottom: 0
      text-align: center
      vertical-align: middle
      line-height: 0.44rem
      .remark
        color: #999
        font-size: 0.28rem
      .pay-price
        color: red
        font-size: 0.42rem
      .pay-btn
        color: #fff
        margin: 0.18rem
        line-height: 0.9rem
        background-color: #00B6F0
        border-radius: 0.1rem
</style>
