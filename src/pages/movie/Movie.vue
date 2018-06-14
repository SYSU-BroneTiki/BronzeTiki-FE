<template>
  <div class="container">
    <section class="info">
      <el-row>
        <el-col :span="16" class="left">
          <h1 class="title">超时空同居</h1>
          <p class="rating-wrap">
              <el-rate class="rating" v-model="score" disabled show-score text-color="#000"></el-rate>
              <span>(9000人评分)</span>
          </p>
          <p class="meta">
            101分钟 / 喜剧 / 奇幻 / 苏伦(导演) / 雷佳音 / 佟丽娅 / 张衣 / 2018-05-18(中国大陆) 上映
          </p>
        </el-col>
        <el-col :span="8" class="right">
          <img class="cover" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.webp" alt="movie">
        </el-col>
      </el-row>
    </section>
    <section class="introduction">
      <h2>剧情简介</h2>
      <p>来自2018年谷小焦（佟丽娅 饰）与1999年陆鸣（雷佳音 饰），两人时空重叠意外住在同一个房间。从互相嫌弃到试图“共谋大业”，阴差阳错发生了一系列好笑的事情。乐在其中的两人并不知道操控这一切的神秘人竟是想要去2037年“投机取巧”的2018年的……</p>
    </section>
    <section class="comment">
      <h2>评论</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data () {
    return {
      score: 5.0
    }
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
    padding: 0.02rem
    .info
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
      margin-top: 0.3rem
      p
        margin-top: 0.2rem
        font-size: 0.3rem
        line-height: 0.45rem
    .comment
      margin-top: 0.3rem
</style>
