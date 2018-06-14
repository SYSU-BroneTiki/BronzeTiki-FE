<template>
  <div class="container">
    <div class="item-list">
      <div class="item">
        <el-row class="item-row">
          <el-col :span="5" class="movie-post">
            <img src="https://p0.meituan.net/128.180/movie/200526fd0facc141caeef984314f7ef8328722.jpg" alt="movie-img">
          </el-col>
          <el-col :span="15" class="movie-detail">
            <el-row class="movie-title">深海越狱</el-row>
            <el-row class="movie-rating">
              <el-rate v-model="score" disabled ></el-rate>
            </el-row>
            <el-row class="movie-classification">剧情,动作,犯罪</el-row>
            <el-row class="movie-decoration">时长：104分钟</el-row>
            <el-row class="movie-showtime">2018-06-08大陆上映</el-row>
          </el-col>
          <el-col :span="4" class="movie-state">
            <div class="state">购票</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data () {
    return {
      score: 5
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top: 1.0rem
    padding-left: 0.3rem
    padding-right: 0.2rem
    // .item-list
    .item-list
      .item
        // background-color: lightgrey
        border-bottom: 0.02rem solid lightgrey
        padding: 0.3rem 0
        .item-row
          .movie-post
            img
              width: 100%
              border-radius: 0.1rem
          .movie-detail
            font-size: 0.28rem
            padding-left: 0.2rem
            .el-row
              margin-top: 0.04rem
              margin-bottom: 0.1rem
            .movie-title
              font-size: 0.34rem
              font-weight: bold
          .movie-state
            .state
              background-color: #00b6f0
              color: #fff
              font-size: 0.3rem
              line-height: 0.5rem
              text-align: center
              border-radius: 0.06rem
              margin: 0.5rem 0.02rem 0 0.02rem
</style>
