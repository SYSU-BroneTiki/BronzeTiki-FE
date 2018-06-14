<template>
  <div class="list-wrapper">
    <el-collapse class="item-list" accordion>
      <el-collapse-item class="item">
        <template slot="title">
          <div class="item-title-wrapper">
            <img class="item-post" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp" alt="img1">
            <div class="item-info">
              <div class="item-title">Name of Movie</div>
              <div class="item-classification">Action|Adventure|Science</div>
              <div class="item-price">75 RMB</div>
              <div class="item-rating">
                <span class="iconfont like">&#xe874;</span>
                <span> 95% </span>
                <span class="iconfont dislike">&#xe61e;</span>
                <span> 5% </span>
              </div>
            </div>
          </div>
        </template>
        <!-- <screen></screen> -->
        <seat></seat>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Screen from './Screen'
import Seat from './Seat'
export default {
  name: 'HomeList',
  components: {
    Screen,
    Seat
  }
}
</script>

<!-- html font-size = 50px = 1rem -->
<style lang="stylus" scoped>
  .item >>> .el-collapse-item__header
    height: 3.3rem !important
    background: white !important
    border-radius: 0.1rem
    margin-bottom: 0.02rem
  .list-wrapper
    margin-top: 1.8rem
    padding: 0.06rem
  .item
    // margin-bottom: 0.8rem
  .item-title-wrapper
    position: relative
    .item-post
      position: absolute
      left: 0.2rem
      bottom: 0.5rem
      width: 2.92rem
      height: 3.6rem
      border-radius: 0.2rem
    .item-info
      overflow: hidden
      display: inline-block
      height: 3rem
      width: 40%
      margin-left: 3.38rem
      .item-title
        font-weight: bold
        font-size:0.38rem
        line-height: 0.40rem
        margin-top: 0.4rem
        margin-left: 0.2rem
      .item-classification
        font-weight: lighter
        margin-top: 0.1rem
        margin-left: 0.2rem
        font-size: 0.2rem
        line-height: 0.3rem
      .item-price
        color: #fff
        background: #67C23A
        border-radius: 0.2rem
        text-align: center
        width: 1.4rem
        margin-top: 0.1rem
        margin-left: 0.2rem
        font-size: 0.2rem
        line-height: 0.4rem
      .item-rating
        font-size: 0.3rem
        line-height: 0.4rem
        margin-top: 0.4rem
        margin-left: 0.2rem
        .like
          color: red
</style>
