<template>
  <div class="seat-table">
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
  </div>
</template>

<script>
export default {
  name: 'Seat',
  data () {
    return {
      rows: 10,
      cols: 12
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icon
   width: 0.38rem
   height: 0.38rem
   // vertical-align: -0.15em
   fill: currentColor;
   overflow: hidden;
  .seat-table
    margin-top: 0.2rem
    text-align:center
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
</style>
