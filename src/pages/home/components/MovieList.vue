<!-- eslint-disable -->
<template>
  <div class="container">
    <div class="item-list">
      <div class="item" v-for="movie in movies" :key="movie.id">
        <router-link :to="'/detail/'+ movie.id" tag="div">
          <el-row class="item-row">
            <el-col :span="5" class="movie-post">
              <img :src="movie.poster" alt="movie-img">
            </el-col>
            <el-col :span="16" class="movie-detail">
              <el-row class="movie-title">{{movie.name}}</el-row>
              <el-row class="movie-rating">
                <el-rate v-model="movie.rating / 2" disabled></el-rate>
              </el-row>
              <el-row class="movie-classification">
                <!-- <span>{{movie.classification}}</span> -->
                <!-- <span v-for="(type, typeindex) in movie.classification" :key="typeindex">{{type}} </span> -->
                <span>{{movie.classification}}</span>
              </el-row>
              <el-row class="movie-duration">时长：{{movie.duration}}分钟</el-row>
              <el-row class="movie-showtime">{{movie.showtime}}大陆上映</el-row>
            </el-col>
            <el-col :span="3" class="movie-state">
              <div class="state" v-if="movie.status">可预订</div>
            </el-col>
          </el-row>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
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
              font-size: 0.2rem
              line-height: 0.5rem
              text-align: center
              border-radius: 0.06rem
              margin: 0.5rem 0.02rem 0 0.02rem
</style>
