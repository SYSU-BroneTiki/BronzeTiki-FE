<template>
  <div class="container">
    <!-- <movie-detail></movie-detail> -->
    <!-- <screen></screen> -->
    <!-- <seat></seat> -->
  </div>
</template>

<script>
import MovieDetail from './components/MovieDetail'
import Screen from './components/Screen'
import Seat from './components/Seat'
export default {
  name: 'Movie',
  components: {
    MovieDetail,
    Screen,
    Seat
  }
}
</script>

<style lang="stylus" scoped>

</style>
