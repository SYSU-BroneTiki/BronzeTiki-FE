<template>
  <div class="home">
    <home-header></home-header>
    <!-- <home-list></home-list> -->
    <movie-list></movie-list>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
// import HomeList from './components/List'
import MovieList from './components/MovieList'
import BottomNav from './components/BottomNav'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    MovieList,
    BottomNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
