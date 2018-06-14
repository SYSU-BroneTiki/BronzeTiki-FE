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
        <el-tab-pane v-for="(item, index) in selections" :label="item.date" :name="'tab'+index" :key="index">
          <div class="screen-item" v-for="(screen, scrIndex) in item.screens" :key="scrIndex">
            <el-row>
              <el-col :span="5" class="screen-time">
                <el-row class="begin">{{screen.begin}}</el-row>
                <el-row>-</el-row>
                <el-row class="end">{{screen.end}}</el-row>
              </el-col>
              <el-col :span="7" class="screen-hall">{{screen.hall}}号厅</el-col>
              <el-col :span="7" class="price">￥{{screen.prices}}</el-col>
              <el-col :span="5" class="buy-btn-wrap">
                <router-link :to="'/seat/'+screen.screenId" tag="div" v-show="screen.rest">
                  <div class="buy-btn">购票</div>
                </router-link>
                <div class="sell-out-btn" v-show="!screen.rest">已售完</div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Screen',
  data () {
    return {
      movieId: 0,
      movieName: '',
      poster: '',
      selections: []
    }
  },
  methods: {
    getMovieScreen () {
      axios.get('/api/screen.json', {
        params: {
          id: this.$route.params.movieId
        }
      }).then(this.handleGetMovieScreenSucc)
    },
    handleGetMovieScreenSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const tdata = res.data
        this.movieId = tdata.movieId
        this.movieName = tdata.movieName
        this.poster = tdata.poster
        this.selections = tdata.selections
      }
    }
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
          .sell-out-btn
            background-color: grey
            color: #fff
            line-height: 0.5rem
            border-radius: 0.1rem
            text-align: center
            margin-top: 0.14rem
</style>
