<template>
  <div class="comment-list">
    <div class="item" v-for="(item, index) in currentComment" :key="currentPage * 3 + index">
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
    <el-row class="submit-button">
      <el-button class="comment-button" size="mini" @click="submitComment">comment</el-button>
    </el-row>
  </div>
</template>

<script>
import DataProcess from '../../common/utils/DataProcess'
import axios from 'axios'
export default {
  data () {
    return {
      comments: [{
        username: 'test1',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test2',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test3',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test4',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test5',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test6',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }, {
        username: 'test7',
        avatar: 'http://pic3.qqmofasi.com/2015/03/23/506_uEpSW2E6H8x2e66H370i_square.jpg',
        content: 'haha',
        date: '2012.11.29'
      }],
      currentComment: [],
      currentPage: 0,
      myComment: ''
    }
  },
  created () {
    let arrayLength = this.comments.length
    let currentIndex = this.currentPage * 3
    let iterationLength
    if (currentIndex + 3 >= arrayLength) {
      iterationLength = arrayLength % 3
    } else {
      iterationLength = 3
    }
    for (let i = 0; i < iterationLength; i++) {
      this.currentComment[i] = this.comments[this.currentPage * 3 + i]
    }
  },
  watch: {
    currentPage: function () {
      let arrayLength = this.comments.length
      let currentIndex = this.currentPage * 3
      let iterationLength
      if (currentIndex + 3 >= arrayLength) {
        iterationLength = arrayLength % 3
      } else {
        iterationLength = 3
      }
      for (let i = 0; i < iterationLength; i++) {
        this.currentComment[i] = this.comments[this.currentPage * 3 + i]
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
      if (this.$store.state.auth.user.username) {
        let myComment = {
          comment: this.myComment,
          date: new Date()
        }
        console.log(myComment)
        axios.post('', DataProcess(myComment)).then(res => {

        })
      } else {
        this.$router.push('/signin')
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

.submit-button {
  text-align right
}

</style>
