<template>
  <div class="container">
    <header class="navbar">
      <el-row>
        <el-col :span="3">
          <router-link tag="div" to="/">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col :span="18">
          我的电影订单
        </el-col>
      </el-row>
    </header>
    <section class="item-list">
      <div class="item" v-for="(order, orderIndex) in orderList" :key="orderIndex">
        <el-row class="item-detail">
          <el-col :span="5" class="item-post">
            <img class="movie-post" :src="order.poster" alt="movie">
          </el-col>
          <el-col :span="14" class="item-info">
            <el-row class="item-name">
              {{ order.movieName }}
            </el-row>
            <el-row :span="12" class="item-num"> {{ order.seats.length }} 张</el-row>
            <el-row class="item-date">
              {{ order.begin}}
            </el-row>
            <el-row class="item-hall">{{ order.hall }}号厅</el-row>
            <el-row class="item-seats">
              <div class="seat" v-for="(seatItem, seatIndex) in order.seats" :key="seatIndex">
                {{ seatItem[0] + 1 }}排{{ seatItem[1] + 1 }}座
              </div>
            </el-row>
          </el-col>
          <el-col :span="5" class="pay-btn-wrap" v-show="order.isValid && !order.isPayed">
            <div class="pay-btn" @click="payOrder(order.orderId)">去付款</div>
          </el-col>
        </el-row>
        <el-row class="item-state">
          <el-col :span="12">总价: <span class="price">￥70.00</span></el-col>
          <el-col :span="12" class="state unpaid" v-show="order.isValid && !order.isPayed">未支付</el-col>
          <el-col :span="12" class="state paid" v-show="order.isValid && order.isPayed">已支付</el-col>
          <el-col :span="12" class="state unvalid" v-show="!order.isValid">已失效</el-col>
        </el-row>
        <!-- <el-row class="count-down">支付剩余时间: 09:00</el-row> -->
      </div>
    </section>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from '@/common/BottomNav'
export default {
  name: 'OrderList',
  data () {
    return {
      orderList: []
    }
  },
  computed: {
    orderStatus () {
      return this.$store.state.order.orderInfo.status
    },
    errorMsg () {
      return this.$store.state.order.orderInfo.message
    }
  },
  components: {
    BottomNav
  },
  methods: {
    handleGetListSucc (res) {
      this.orderList = res.data.orders
      console.log('订单列表获取', this.orderList)
    },
    payOrder (orderId) {
      this.$store.dispatch('GET_ORDER', orderId).then(this.handleJump)
    },
    handleJump () {
      console.log(this.$store.state.order.orderInfo)
      if (this.orderStatus !== 200) {
        alert(this.errorMsg, '获取订单失败，刷新重试')
        this.$router.push('/order-list')
      } else {
        this.$router.push('/order-confirm')
      }
    }
  },
  mounted () {
    this.$store.dispatch('GET_ORDERLIST').then(this.handleGetListSucc)
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
    z-index: 2
  .item-list
      margin-top: 1.2 rem
      .item
        margin: 0.4rem 0.2rem
        border-bottom: 1px solid lightgrey
        // background-color: lightgrey
        .count-down
          color: red
          font-size: 0.26rem
          line-height: 0.46rem
          text-align: right
        .movie-post
          width: 100%
        .item-info
          padding-left: 0.24rem
          .el-row
            margin-bottom: 0.1rem
          .item-name
            font-size: 0.32rem
            line-height: 0.4rem
            overflow: hidden
          .item-num
            font-size: 0.3rem
          .item-date
            font-size: 0.28rem
            line-height: 0.4rem
            color: #888
          .item-seats
            font-size: 0.28rem
            line-height: 0.4rem
            color: #888
            .seat
              display: inline-block
              padding-right: 0.1rem
        .pay-btn-wrap
          .pay-btn
            color: #fff
            background-color: #00B6F0
            text-align: center
            font-size: 0.24rem
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
            color: grey
          .state
            text-align: right
</style>
