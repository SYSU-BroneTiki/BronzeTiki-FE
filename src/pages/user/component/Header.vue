<template>
  <el-row class="header">
    <el-col :span="4">
      <div class="goback" @click.stop="goback">
        <i class="el-icon-arrow-left"></i>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="title">
        <p>{{headerName}}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'UserHeader',
  props: [
    'HeaderName'
  ],
  computed: {
    headerName () {
      return this.HeaderName
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background #00b6f0;
}

.title {
  font-size 20px;
  color white;
  height 50px;
}

.title p {
  position: absolute;
  top 16px;
  left 50%;
  transform translateX(-50%)
}

.goback {
  height 50px;
  color white;
  padding-left 10px;
}

.goback i {
  position relative;
  top 50%;
  transform translateY(-50%);
}
</style>
