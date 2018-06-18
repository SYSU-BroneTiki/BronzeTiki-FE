<template>
  <div class="container">
    <div class="content">
      <el-row>
        <el-col :span="24">
          <div class="header">
            <p>Mine</p>
          </div>
        </el-col>
      </el-row>
      <el-row class="user-info">
        <el-col :span="6" class="user-info-item">
            <div class="avatar">
              <img src="http://www.lzshuli.com/game_images/165336033.jpeg">
            </div>
        </el-col>
        <el-col :span="14" class="user-info-item">
          <p class="nickname">{{user.nickname}}</p>
          <p class="description">{{user.description}}</p>
        </el-col>
        <el-col :span="4" class="user-info-item">
          <div @click.stop="feedback">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="4" class="item-icon">
          <i class="el-icon-mobile-phone"></i>
        </el-col>
        <el-col :span="15">
          <p>My balance</p>
        </el-col>
        <el-col :span="5" class="item-jump-icon">
          <el-badge class="mark" :value="user.balance" />
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="4" class="item-icon">
          <i class="el-icon-star-off"></i>
        </el-col>
        <el-col :span="16">
          <p>My likes</p>
        </el-col>
        <el-col :span="4" class="item-jump-icon">
          <div @click.stop="feedback">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="4" class="item-icon">
          <i class="el-icon-view"></i>
        </el-col>
        <el-col :span="16">
          <p>My record</p>
        </el-col>
        <el-col :span="4" class="item-jump-icon">
          <div @click.stop="feedback">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="4" class="item-icon">
          <i class="el-icon-setting"></i>
        </el-col>
        <el-col :span="16">
          Setting
        </el-col>
        <el-col :span="4" class="item-jump-icon">
          <div @click.stop="feedback">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
      <el-row class="item">
        <el-col :span="4" class="item-icon">
          <i class="el-icon-bell"></i>
        </el-col>
        <el-col :span="16">
          Feedback
        </el-col>
        <el-col :span="4" class="item-jump-icon">
          <div @click.stop="feedback">
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-row>
      <el-row class="exit">
        <el-col :span="24">
          <el-button type="danger" v-on:click="feedback">sign out</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BottomNav from '@/common/BottomNav'
export default {
  components: {
    BottomNav
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    feedback: function (event) {
      if (event.cancelable) {
        if (!event.defaultPrevented) {
          event.preventDefault()
        }
      }
      this.$alert('Please mail to xxx@xxx.com', {
        confirmButtonText: 'confirm',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    height 100%;
    width 100%;
  }

  .content {
    height 100%;
    width 100%;
  }

  .header {
    background #00b6f0;
    font-size 20px;
    color white;
    height 50px;
    text-align center;
  }

  .header p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .user-info {
    height 90px;
    background white;
    margin-bottom 15px;
  }

  .user-info .user-info-item {
    height 100%
  }

  .user-info-item img {
    width 100%;
    height 100%;
  }

  .user-info-item .avatar {
    display inline-block;
    border 1px solid grey;
    position relative;
    top 50%;
    transform: translateY(-50%);
    margin-left 15px;
    border-radius 50%;
    overflow:hidden;
    width 60%;
    height 60%;
  }

  .user-info-item .nickname {
    margin-top 20px;
    padding 5px;
    font-size 20px;
    font-weight bold;
  }

  .user-info-item .description {
    padding-left 5px;
    color grey;
  }

  .user-info-item div {
    height 100%;
  }

  .user-info-item i{
    position relative;
    top 50%;
    transform: translateY(-50%);
    left 60%;
  }

  .item {
    margin-bottom 2px;
    height 50px;
    background white;
    overflow:hidden;
  }

  .item .el-col {
    height: 100%;
    position relative;
    display: flex;
    align-items: center;
  }

  .item .el-col div {
    position relative;
    left 30%;
  }

  .item .el-col i {
    margin-left 15px;
  }

  .exit {
    position relative;
    margin-top 50px;
  }

  .exit button {
    position relative;
    left 50%;
    transform: translateX(-50%);
  }
</style>
