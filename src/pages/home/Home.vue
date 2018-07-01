<template>
  <div class="home">
    <home-header></home-header>
    <!-- <home-list></home-list> -->
    <movie-list :movies="movies"></movie-list>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
// import axios from 'axios'
import HomeHeader from './components/Header'
// import HomeList from './components/List'
import MovieList from './components/MovieList'
import BottomNav from '@/common/BottomNav'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    MovieList,
    BottomNav
  },
  data () {
    return {
      movies: []
    }
  },
  methods: {
    getMovieList () {
      this.$store.dispatch('GET_MOVIES').then(this.getMovieListSucc)
    },
    getMovieListSucc (res) {
      if (res.status === 200) {
        let tRes = res.data
        if (tRes.ret) {
          this.movies = tRes.data.movies
        }
      } else {
        alert('电影数据获取失败')
      }
    }
  },
  mounted () {
    this.getMovieList()
  }
}
</script>

<style lang="stylus" scoped>

</style>
