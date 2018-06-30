<template>
  <div class="comment-list">
    <div class="item" v-for="(item, index) in currentComment" :key="currentPage * 3 + index" v-show="currentPage * 3 + index < comments.length">
      <el-row>
        <el-col :span="4">
          <div class="username">{{item.username}}</div>
          <div class="avatar"><img :src=item.avatar></div>
        </el-col>
        <el-col :span="14">
          <div class="content">{{item.content}}</div>
        </el-col>
        <el-col :span="6">
          <div class="date">{{item.date}}</div>
        </el-col>
      </el-row>
    </div>
    <el-row class="button">
      <div>
        <el-button class="page-button" size="mini" @click="prevPage"><i class="el-icon-arrow-left"></i></el-button>
        <el-button class="page-button" size="mini" @click="nextPage"><i class="el-icon-arrow-right"></i></el-button>
      </div>
    </el-row>
    <el-row class="my-comment">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input your comment"
        v-model="myComment">
      </el-input>
    </el-row>
    <div class="rating">
      <el-rate v-model="rating"></el-rate>
    </div>
    <div class="submit-button">
      <el-button class="comment-button" size="mini" @click="submitComment">comment</el-button>
    </div>
  </div>
</template>

<script>
import DataProcess from '../../common/utils/DataProcess'
import axios from 'axios'
export default {
  data () {
    return {
      comments: [],
      currentComment: [],
      currentPage: 0,
      myComment: '',
      rating: 0
    }
  },
  // computed: {
  //   comments: function () {
  //     return this.$store.state.movie.detail.comments
  //   }
  // },
  created () {
    this.comments = this.$store.state.movie.detail.comments
    for (let i = 0; i < this.comments.length; i++) {
      this.comments[i].avatar = '/host' + this.comments[i].avatar
    }
    console.log(this.comments)
    for (let i = 0; i < 3; i++) {
      if (this.currentPage * 3 + i < this.$store.state.movie.detail.comments.length) {
        this.currentComment.splice(i, 1, this.comments[this.currentPage * 3 + i])
      } else {
        this.currentComment.splice(i, 1, {})
      }
    }
  },
  watch: {
    comments: function () {
      for (let i = 0; i < 3; i++) {
        if (this.currentPage * 3 + i < this.comments.length) {
          this.currentComment.splice(i, 1, this.comments[this.currentPage * 3 + i])
          // this.currentComment[i] = this.comments[this.currentPage * 3 + i]
        } else {
          // this.currentComment[i] = {}
          this.currentComment.splice(i, 1, {})
        }
      }
    },
    currentPage: function () {
      for (let i = 0; i < 3; i++) {
        if (this.currentPage * 3 + i < this.comments.length) {
          this.currentComment.splice(i, 1, this.comments[this.currentPage * 3 + i])
          // this.currentComment[i] = this.comments[this.currentPage * 3 + i]
        } else {
          // this.currentComment[i] = {}
          this.currentComment.splice(i, 1, {})
        }
      }
    }
  },
  methods: {
    nextPage: function () {
      let pageNum = Math.ceil(this.comments.length / 3)
      if (this.currentPage < pageNum - 1) {
        this.currentPage += 1
      }
    },
    prevPage: function () {
      if (this.currentPage !== 0) {
        this.currentPage -= 1
      }
    },
    submitComment: function () {
      if (this.myComment !== '') {
        if (this.$store.state.auth.user.username) {
          let tempDate = new Date()
          let uploadComment = {
            username: this.$store.state.auth.user.username,
            movieID: this.$route.params.movieId,
            rating: this.rating,
            comment: this.myComment,
            date: tempDate.getFullYear() + '-' + tempDate.getMonth() + '-' + tempDate.getDay()
          }
          let postData = {
            data: JSON.stringify(uploadComment)
          }
          var that = this
          axios.post('/api/comments', DataProcess.genFormData(postData)).then(res => {
            console.log(res)
            let myComment = {
              username: this.$store.state.auth.user.username,
              avatar: '/host' + this.$store.state.auth.user.avatar,
              content: this.myComment,
              date: uploadComment.date
            }
            if (res.status === 200) {
              that.$store.dispatch('UPDATE_MOVIE_COMMENTS', myComment)
              that.myComment = ''
            } else {
              alert('submit error')
            }
          })
        } else {
          this.$router.push('/signin')
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-list {
  border-top: 0.02rem solid lightgrey
  margin-top: 0.1rem
  position relative
}

.item {
  margin-top 4px
  border-bottom: 0.02rem solid lightgrey
}

.item .avatar {
  width 40px
  height 40px
  overflow hidden
  border-radius 50%
  margin auto
  margin-bottom 2px
  margin-top 2px
}

.item img {
  width 100%
  height 100%
}

.item .el-row {
  position relative
  bottom 1px
}

.item .date {
  position absolute
  bottom 2px
}

.item .content {
  padding-left 4px
  padding-right 4px
  position relative
  top 16px
}

.item .el-col-4 {
  text-align center
}

.button {
  margin-top 2px
  text-align right
}

.button .page-button {
  margin-left 0
}

.my-comment {
  margin-top 10px
  margin-bottom 2px
}

.rating {
  width 49%
  display inline-block
}

.submit-button {
  width 49%
  display inline-block
  text-align right
}
</style>
