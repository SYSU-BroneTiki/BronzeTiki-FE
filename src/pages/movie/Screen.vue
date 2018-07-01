<template>
  <div class="container">
    <header class="navbar">
      <el-row class="header-row">
        <el-col class="header-left" :span="4">
          <router-link :to="'/detail/'+movieId" tag="div">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col class="header-title" :span="16">场次选择</el-col>
      </el-row>
    </header>
    <section class="movie-post">
      <img :src="poster" alt="post">
    </section>
    <section class="screen-select">
      <el-tabs type="border-card">
        <el-tab-pane v-for="(item, index) in showScreens" :label="item.tabDate" :name="'tab'+index" :key="index">
          <div class="screen-item" v-for="(screen, scrIndex) in item.screens" :key="scrIndex">
            <el-row>
              <el-col :span="5" class="screen-time">
                <el-row class="begin">{{ new Date(screen.begin).Format('hh:mm') }}</el-row>
<!--                 <el-row>-</el-row>
                <el-row class="end">{{screen.end}}</el-row> -->
              </el-col>
              <el-col :span="7" class="screen-hall">{{ screen.hall }}号厅</el-col>
              <el-col :span="7" class="price">￥{{screen.price}}</el-col>
              <el-col :span="5" class="buy-btn-wrap">
                <router-link :to="'/seat/' + screen.screenId" tag="div" v-show="buyBtnStatus(screen) === 0">
                  <div class="buy-btn">购票</div>
                </router-link>
                <div class="cant-but-btn" v-show="buyBtnStatus(screen) === 1">已售完</div>
                <div class="cant-but-btn" v-show="buyBtnStatus(screen) === 2">已上映</div>
              </el-col>
            </el-row>
          </div>
          <div class="no-screen-msg" v-show="item.screens.length === 0">当天无可预订电影场次</div>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import DateFormat from '../../common/utils/DateFormat'
export default {
  name: 'Screen',
  data () {
    return {
      movieId: 0,
      movieName: '',
      poster: '',
      selections: [],
      showScreens: [{
        'tabDate': '今天',
        'screens': []
      }, {
        'tabDate': '明天',
        'screens': []
      }, {
        'tabDate': '后天',
        'screens': []
      }]
    }
  },
  methods: {
    getMovieScreen () {
      this.$store.dispatch('GET_SCREENS', this.$route.params.movieId).then(this.handleGetMovieScreenSucc)
    },
    handleGetMovieScreenSucc (res) {
      if (res.ret) {
        const tdata = res.data
        this.movieId = tdata.movieId
        this.movieName = tdata.movieName
        this.poster = tdata.poster
        this.selections = tdata.selections
        this.handleShowScreens()
      }
    },
    handleShowScreens () {
      let today = new Date()
      let tomorrow = new Date()
      let dayAfterTom = new Date()
      tomorrow.setDate(today.getDate() + 1)
      dayAfterTom.setDate(today.getDate() + 2)

      for (let i = 0; i < this.selections.length; i++) {
        let temp = (new Date(this.selections[i].date)).Format('yyyy-MM-dd')
        switch (temp) {
          case today.Format('yyyy-MM-dd'):
            this.showScreens[0].screens = this.selections[i].screens
            break
          case tomorrow.Format('yyyy-MM-dd'):
            this.showScreens[1].screens = this.selections[i].screens
            break
          case dayAfterTom.Format('yyyy-MM-dd'):
            this.showScreens[2].screens = this.selections[i].screens
            break
          default:
            break
        }
      }
      for (let i = 0; i < this.showScreens.length; i++) {
        let tLens = this.showScreens[i].screens.length
        for (let j = 0; j < tLens; j++) {
          if (this.isTodayShownScreen(this.showScreens[i].screens[j])) {
            this.showScreens[i].screens[j].isShown = true
          } else {
            this.showScreens[i].screens[j].isShown = false
          }
        }
      }
    },
    isTodayShownScreen (screen) {
      let today = new Date()
      let screenBegin = new Date(screen.begin)
      if (today.Format('yyyy-MM-dd') === screenBegin.Format('yyyy-MM-dd')) {
        if (today.Format('hh:mm:ss') > screenBegin.Format('hh:mm:ss')) {
          return true
        }
      }
      return false
    },
    buyBtnStatus (screen) {
      if (!screen.isShown && screen.rest > 0) {
        return 0
      } else if (!screen.isShown && screen.rest < 1) {
        return 1
      } else if (screen.isShown) {
        return 2
      }
    }
  },
  created () {
    DateFormat.modifyDateProto()
    let today = new Date()
    let tomorrow = new Date()
    let dayAfterTom = new Date()
    tomorrow.setDate(today.getDate() + 1)
    dayAfterTom.setDate(today.getDate() + 2)
    this.showScreens[0].tabDate += (' ' + today.Format('MM-dd'))
    this.showScreens[1].tabDate += (' ' + tomorrow.Format('MM-dd'))
    this.showScreens[2].tabDate += (' ' + dayAfterTom.Format('MM-dd'))
  },
  mounted () {
    this.getMovieScreen()
  }
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
        .screen-time
          .begin
            font-size: 0.38rem
            line-height: 0.8rem
        .screen-hall
          font-size: 0.3rem
          line-height: 0.8rem
        .price
          font-size: 0.34rem
          line-height: 0.8rem
        .buy-btn-wrap
          .buy-btn
            background-color: #00b6f0
            color: #fff
            line-height: 0.5rem
            border-radius: 0.1rem
            text-align: center
            margin-top: 0.14rem
          .cant-but-btn
            background-color: grey
            color: #fff
            line-height: 0.5rem
            border-radius: 0.1rem
            text-align: center
            margin-top: 0.14rem
</style>
