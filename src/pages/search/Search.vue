<template>
  <div class="container">
    <Header HeaderName="Search"></Header>
    <div class="search-input">
      <el-input placeholder="Please input here" v-model="searchContent" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click.stop="submitSearchContent"></el-button>
      </el-input>
    </div>
    <div class="search-result">
      <div v-if="searchedMovies.length === 0" class="no-result">
        <p>No result</p>
      </div>
      <div v-else class="result">
        <movie-list :movies="searchedMovies" class="movie-item"></movie-list>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../user/component/Header'
import MovieList from './../home/components/MovieList'
import axios from 'axios'
export default {
  name: 'Search',
  components: {
    Header,
    MovieList
  },
  data () {
    return {
      searchContent: '',
      searchedMovies: []
    }
  },
  methods: {
    submitSearchContent: function () {
      axios.get('/api/search?query=' + this.searchContent).then(res => {
        console.log(res)
        if (res.status === 200) {
          this.searchedMovies = res.data.movies
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    height 100%
    width 100%
  }

  .search-input {
    margin 5px 2px 0 2px
  }

  .search-result .no-result {
    margin-top 25px
  }

  .search-result .no-result p {
    color lightgrey
    text-align center
  }

  .search-result .result .movie-item {
    margin-top 0
  }
</style>
