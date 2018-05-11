<template>
  <div class="list-wrapper">
    <el-collapse class="item-list" accordion>
      <el-collapse-item class="item">
        <template slot="title">
          <div class="item-title-wrapper">
            <img class="item-post" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.webp" alt="img1">
            <div class="item-title">item-title</div>
          </div>
        </template>
        <div class="item-content">item-content</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'HomeList'
}
</script>

<!-- html font-size = 50px = 1rem -->
<style lang="stylus" scoped>
  .item >>> .el-collapse-item__header
    height: 3.3rem !important
    background: lightgreen !important
  .item-post
    position: relative
    left: 0.3rem
    bottom: 0.7rem
    width: 2.92rem
    height: 3.66rem
    border-radius: 0.2rem
  .item-title
    display: inline-block
    margin-left: 0.5rem
    background: yellow
</style>
