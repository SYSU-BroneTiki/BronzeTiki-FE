<template>
  <div class="container">
    <Header HeaderName="My Record"></Header>
  </div>
</template>

<script>
import Header from './component/Header'
export default {
  components: {
    Header
  },
  computed: {
    user () {
      return this.$store.state.auth.user
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
