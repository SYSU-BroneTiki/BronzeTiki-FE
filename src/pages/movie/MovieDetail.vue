<template>
  <div class="container">
    <header class="navbar">
      <el-row class="header-row">
        <el-col class="header-left" :span="4">
          <router-link to="/" tag="div">
            <i class="el-icon-back"></i>
          </router-link>
        </el-col>
        <el-col class="header-title" :span="16">电影详情</el-col>
      </el-row>
    </header>
    <section class="info">
      <el-row>
        <el-col :span="16" class="left">
          <h1 class="title">{{detail.name}}</h1>
          <p class="rating-wrap">
              <el-rate class="rating" v-model="detail.rating" disabled show-score text-color="#000"></el-rate>
              <!-- <span>(9000人评分)</span> -->
          </p>
          <p class="meta">
            {{detail.duration}}分钟 {{detail.classification}}
            <br/>
            {{detail.primaryActors}}
            <br/>
            {{detail.showtime}}上映
          </p>
        </el-col>
        <el-col :span="8" class="right">
          <img class="cover" :src="detail.poster" alt="movie">
        </el-col>
      </el-row>
    </section>
    <section class="introduction">
      <h2>剧情简介</h2>
      <p>{{detail.description}}</p>
    </section>
    <section class="comment">
      <h2>评论</h2>
      <comment></comment>
    </section>
    <footer class="buy" v-show="detail.status">
      <router-link :to="'/screen/' + detail.id" tag="div">
        <div class="buy-btn">立即购票</div>
      </router-link>
    </footer>
  </div>
</template>

<script>
// import axios from 'axios'
import comment from '../comment/comment'
export default {
  name: 'MovieDetail',
  components: {
    comment
  },
  data () {
    return {
      detail: {}
    }
  },
  methods: {
    getMovieDetail () {
      this.$store.dispatch('GET_MOVIE_DETAIL', this.$route.params.movieId).then(this.handleGetMovieDetailSucc)
    },
    handleGetMovieDetailSucc (res) {
      if (res.ret && res.data) {
        this.detail = res.data
      }
    }
  },
  mounted () {
    this.getMovieDetail()
  }
}
</script>

<style lang="stylus" scoped>
  section
    h2
      color: #aaa
  .container
    // background-color: gray
    margin: 0.38rem
    padding: 2px
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
    .info
      margin-top: 1rem
      padding-bottom: 0.1rem
      border-bottom: 0.02rem solid lightgrey
      .left
        .title
          font-size: 0.5rem
          line-height: 0.52rem
          // word-break: break-all
          margin: 0rem 0 0.1rem
        .rating-wrap
          font-size: 0.3rem
          margin-top: 0.1rem
          margin-bottom: 0.1rem
        .meta
          margin-top: 0.3rem
          font-size: 0.28rem
          line-height: 0.5rem
      .right
        .cover
          width: 100%
    .introduction
      margin-top: 0.2rem
      border-bottom: 0.02rem solid lightgrey
      p
        margin-top: 0.2rem
        font-size: 0.3rem
        line-height: 0.45rem
    .comment
      margin-top: 0.1rem
    .buy
      // position: fixed
      // left: 0
      // right: 0
      // bottom: 0
      .buy-btn
        margin: 0.18rem
        color: #fff
        line-height: 0.9rem
        background-color: #00B6F0
        border-radius: 0.1rem
        text-align: center
</style>
