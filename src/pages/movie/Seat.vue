<template>
  <div class="container">
    <header class="navbar">
      <el-row class="header-row">
        <el-col class="header-left" :span="4">
          <router-link :to="'/screen/'+screenId" tag="div">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col class="header-title" :span="16">选座</el-col>
      </el-row>
    </header>
    <section class="play-info">
      <div>{{screenDate}} {{screenBegin}}</div>
      <div>{{screenHall}}号厅</div>
    </section>
    <section class="seat-table">
      <div class="front-screen">放映屏幕</div>
      <div class="seat-row" v-for="i in rows" :key="i">
        <div class="row-num">{{ i }}</div>
        <div class="seat" v-for="j in cols" :key="j">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zuowei"></use>
          </svg>
        </div>
      </div>
      <div class="seat-descrip">
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuowei"></use>
          </svg>
          可选
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuoweixuanzhong"></use>
          </svg>
          已选
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuoweixuanzhong1"></use>
          </svg>
          已售
        </span>
      </div>
    </section>
    <section class="show-seats">
      已选座位
    </section>
    <footer class="confirm">
      <div class="confirm-btn">确认选座</div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Seat',
  data () {
    return {
      screenId: 0,
      screenDate: '',
      screenBegin: '',
      screenHall: 0,
      rows: 10,
      cols: 10,
      seats: []
    }
  },
  methods: {
    getSeats () {
      axios.get('/api/seat.json', {
        params: {
          screenId: this.$route.params.screenId
        }
      }).then(this.handleGetSeatSucc)
    },
    handleGetSeatSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const tdata = res.data
        this.screenId = tdata.screenId
        this.screenDate = tdata.screenDate
        this.screenBegin = tdata.screenBegin
        this.screenHall = tdata.screenHall
        this.seats = tdata.seats
        console.log(this.seats)
      }
    }
  },
  mounted () {
    this.getSeats()
  }
}
</script>

<style lang="stylus" scoped>
  .icon
    width: 0.38rem
    height: 0.38rem
    // vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
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
    .play-info
      margin-top: 1.2rem
      font-size: 0.3rem
      line-height: 0.4rem
      text-align: center
    .seat-table
      margin-top: 0.2rem
      text-align:center
      .front-screen
        display: inline-block
        border: 0.02rem solid lightgrey
        width: 40%
        margin-bottom: 0.2rem
        font-size: 0.28rem
        line-height: 0.4rem
      .seat-row
        font-size: 0.3rem
        line-height: 0.32rem
        .row-num
          display: inline-block
          width: 0.3rem
        .seat
          display: inline-block
          margin: 0.06rem
          width: 0.42rem
          height: 0.42rem
          // background-color: green
      .seat-descrip
        .selected-seat
          color: green
        .reserved-seat
          color: gray
    .show-seats
      margin-top: 0.3rem
      text-align: center
    .confirm
      position: fixed
      left: 0
      right: 0
      bottom: 0
      text-align: center
      .confirm-btn
        background-color: #00B6F0
        color: #fff
        margin: 0.18rem
        line-height: 0.9rem
        border-radius: 0.1rem
</style>
