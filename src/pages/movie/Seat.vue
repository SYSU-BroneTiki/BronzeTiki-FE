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
        <div class="seat" v-for="j in cols" :key="j" >
          <div class="wrapper" @click="selectSeatTrigger(i, j)">
            <svg class="icon available" aria-hidden="true" v-show="realtimeSeats[i-1][j-1] === 0">
              <use xlink:href="#icon-zuowei"></use>
            </svg>
            <svg class="icon selected" aria-hidden="true" v-show="realtimeSeats[i-1][j-1] === 2">
              <use xlink:href="#icon-zuoweixuanzhong"></use>
            </svg>
            <svg class="icon unavailable" aria-hidden="true" v-show="realtimeSeats[i-1][j-1] === 1">
              <use xlink:href="#icon-zuoweixuanzhong1"></use>
            </svg>
          </div>
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
      <div>已选座位</div>
      <div class="seat" v-for="(item, index) in selectedSeats" :key="index">{{ item[0]+1 }}排 {{ item[1]+1 }}座</div>
    </section>
    <footer class="confirm">
      <div class="confirm-btn" @click="confirmSeats">确认选座</div>
    </footer>
    <el-dialog  title="提示" :visible.sync="centerDialogVisible" width="80%" top="4rem" center>
      <span>{{ tipsInfo }}</span>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
import DataProcess from '../../common/utils/DataProcess'
export default {
  name: 'Seat',
  data () {
    return {
      rows: 10,
      cols: 10,
      screenId: 0,
      screenDate: '0000-00-00',
      screenBegin: '00:00',
      screenHall: 0,
      seats: [],
      selectedSeats: [],
      phone: '00000000000',
      centerDialogVisible: false,
      tipsInfo: ''
    }
  },
  computed: {
    realtimeSeats () {
      var seatTable = []
      const seatsLen = this.seats.length
      seatTable.length = 10
      for (let i = 0; i < this.rows; i++) {
        seatTable[i] = []
        seatTable[i].length = 10
        for (let j = 0; j < this.cols; j++) {
          seatTable[i][j] = (seatsLen === 0) ? 0 : this.seats[i][j]
        }
      }
      for (let i = 0; i < this.selectedSeats.length; i++) {
        const temp = this.selectedSeats[i]
        seatTable[temp[0]][temp[1]] = 2
      }
      return seatTable
    },
    orderStatus () {
      return this.$store.state.order.orderInfo.status
    },
    createErrorMsg () {
      return this.$store.state.order.orderInfo.message
    }
  },
  methods: {
    getSeats () {
      this.$store.dispatch('GET_SEATS', this.$route.params.screenId).then(this.handleGetSeatSucc)
    },
    handleGetSeatSucc (res) {
      // res = res.data
      if (res.ret && res.data) {
        const tdata = res.data
        this.screenId = tdata.screenId
        this.screenDate = tdata.screenDate
        this.screenBegin = tdata.screenBegin
        this.screenHall = tdata.screenHall
        this.seats = tdata.seats
      }
    },
    selectSeatTrigger (row, col) {
      const tSeat = [row - 1, col - 1]
      if (this.isAvailableSeat(tSeat)) {
        const tIndex = this.isSelectedSeat(tSeat)
        //  已被选中的座位
        if (tIndex > -1) {
          this.selectedSeats.splice(tIndex, 1)
        } else {
        //  未被选中的座位
          if (this.selectedSeats.length === 4) {
            this.tipsInfo = '最多只能选择四个座位'
            this.centerDialogVisible = true
          } else {
            this.selectedSeats.push(tSeat)
          }
        }
      }
    },
    isAvailableSeat (tSeat) {
      if (this.seats.length <= 0) {
        return true
      }
      if (this.seats[tSeat[0]][tSeat[1]] === 0) {
        return true
      } else {
        return false
      }
    },
    isSelectedSeat (tSeat) {
      for (let i = 0; i < this.selectedSeats.length; i++) {
        if (this.selectedSeats[i][0] === tSeat[0] && this.selectedSeats[i][1] === tSeat[1]) {
          return i
        }
      }
      return -1
    },
    confirmSeats () {
      if (this.selectedSeats.length > 0 && this.selectedSeats.length < 5) {
        this.createorder()
      } else {
        this.tipsInfo = '请选择座位'
        this.centerDialogVisible = true
      }
    },
    createorder () {
      let data = {
        screenId: this.$route.params.screenId,
        seats: this.selectedSeats,
        phone: this.phone
      }
      data = DataProcess.packData(data)
      this.$store.dispatch('CREATE_ORDER', DataProcess.genFormData(data)).then(this.isSucc)
      // this.$store.dispatch('CREATE_ORDER', data)
    },
    isSucc () {
      if (this.orderStatus) {
        this.$router.push('/order-confirm')
      } else {
        alert('预定失败，请重试')
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
        margin-top: 0.3rem
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
    .show-seats
      text-align: center
      .seat
        display: inline-block
        font-size: 0.28rem
        padding: 0.06rem
        margin: 0.2rem 0.08rem
        border-radius: 0.06rem
        background-color: lightgrey
</style>
