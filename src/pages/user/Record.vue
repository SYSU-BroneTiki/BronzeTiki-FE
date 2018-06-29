<template>
  <div class="container">
    <Header HeaderName="My Record"></Header>
    <movie-list :movies="movieRecords"></movie-list>
  </div>
</template>

<script>
import Header from './component/Header'
import MovieList from '../home/components/MovieList'
export default {
  components: {
    Header,
    MovieList
  },
  data () {
    return {
      movies: []
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    getMovieRecord () {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    height 100%;
    width 100%;
  }
</style>
