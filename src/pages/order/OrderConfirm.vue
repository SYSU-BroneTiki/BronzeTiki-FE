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
    <div v-show="status">
      <section class="count-down">
        <!-- <i class="el-icon-time"></i> -->
        <!-- 支付剩余时间: 09:00 -->
      </section>
      <section class="movie-info">
        <el-row class="movie-name">{{ movieName }}</el-row>
        <el-row class="movie-time">{{ movieBegin }}</el-row>
        <el-row class="hall">{{ hall }}号厅</el-row>
        <el-row class="seats">
          <div class="seat" v-for="(item, index) in selectedSeats" :key="index">{{ item[0]+1 }}排{{ item[1]+1 }}座</div>
        </el-row>
      </section>
      <section class="contract-way">
        <el-row class="phone">
          <el-col :span="6" class="phone-label">手机号码</el-col>
          <!-- <el-col :span="16" class="phone-number">{{ phone }}</el-col> -->
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
      <footer class="price-confirm" v-show="isValid && !isPayed">
        <el-row>
          <el-col :span="12" class="remark">不支持退签、改票</el-col>
          <el-col :span="12">应付<span class="pay-price">￥{{ total }}</span></el-col>
        </el-row>
        <el-row>
          <div class="pay-btn" @click="showDialog">确认支付</div>
        </el-row>
      </footer>
    </div>
    <section class="errorMsg" v-show="!status">
    </section>
    <section class="passwordInput">
      <el-dialog ref="passDialog" title="输入支付密码" :visible.sync="showPasswardInputArea" @close="clearForm" top="4.5rem" width="80%">
        <el-form :model="passForm" ref="passForm">
          <el-form-item prop="payPassword">
            <el-input type="password" auto-complete="off" v-model="passForm.payPassword"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" @click="confirmPass">确认</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </section>
  </div>
</template>

<script>
import DataProcess from '../../common/utils/DataProcess'
export default {
  name: 'OrderConfirm',
  data () {
    return {
      showPasswardInputArea: false,
      passForm: {
        payPassword: ''
      }
    }
  },
  computed: {
    password () {
      return this.passForm.payPassword
    },
    orderInfo () {
      return this.$store.state.order.orderInfo
    },
    status () {
      // return true
      let tStatus = this.orderInfo.status
      if (tStatus) {
        return tStatus
      } else {
        return false
      }
    },
    errorMessage () {
      return this.orderInfo.message
    },
    orderId () {
      return this.orderInfo.data.orderId
    },
    movieName () {
      return this.orderInfo.data.movieName
    },
    movieBegin () {
      return this.orderInfo.data.begin
    },
    hall () {
      return this.orderInfo.data.hall
    },
    selectedSeats () {
      return this.orderInfo.data.seats
    },
    phone () {
      return this.orderInfo.data.phone
    },
    total () {
      return this.orderInfo.data.total
    },
    isPayed () {
      return this.orderInfo.data.isPayed
    },
    isValid () {
      return this.orderInfo.data.isValid
    }
  },
  methods: {
    showDialog () {
      this.showPasswardInputArea = true
    },
    clearForm () {
      this.passForm.payPassword = ''
    },
    confirmPass () {
      let payInfo = {
        'data': JSON.stringify({
          'orderId': this.orderId,
          'password': this.password
        })
      }
      let payload = {
        'orderId': this.orderId,
        'payInfo': DataProcess.genFormData(payInfo)
      }
      this.clearForm()
      this.showPasswardInputArea = false
      this.$store.dispatch('PAY_ORDER', payload).then(this.isPaySucc)
    },
    isPaySucc (res) {
      // console.log(res)
      if (res.ret && res.status) {
        alert('支付成功')
        this.$router.push('/order-list')
      }
      if (res.ret && !res.status) {
        console.log(res.message)
        switch (res.message) {
          case 'Invalid paypassword':
            alert('密码错误')
            break
          case 'Money not enough':
            alert('余额不足，支付失败')
            this.$router.push('/')
            break
          case 'Already payed':
            alert('请勿重复支付')
            this.$router.push('/order-list')
            break
          default:
            alert('未知错误')
            break
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    .errorMsg
      margin-top: 4rem
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
        font-weight : bolder
      .movie-time
        color: red
      .seats
        .seat
          display: inline-block
          margin: 0 0.2rem 0 0
          padding: 0.1rem
          background-color: lightgrey
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
