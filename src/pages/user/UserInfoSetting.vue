<template>
  <div class="container">
    <Header HeaderName="Setting"></Header>
    <el-row class="user-info">
      <el-col :span="6" class="user-info-item">
        <div class="avatar" @click.stop="setAvatar">
          <img src="http://www.lzshuli.com/game_images/165336033.jpeg">
        </div>
      </el-col>
      <el-col :span="14" class="user-info-item">
        <p class="nickname">{{ruleForm.nickname}}</p>
        <p class="description">{{ruleForm.description}}</p>
      </el-col>
      <el-col :span="4" class="user-info-item">
      </el-col>
    </el-row>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="ruleForm">
      <el-form-item label="Nickname" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input v-model="ruleForm.description" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Confirm</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Header from './component/Header'
import axios from 'axios'
import DataProcess from '../../common/utils/DataProcess'
export default {
  components: {
    Header
  },
  data () {
    var validateNickname = (rule, value, callback) => {
      console.log(value.length)
      if (value.length <= 1) {
        callback(new Error('The length of nickname should longer than 1'))
      } else if (value.length >= 10) {
        callback(new Error('The length of nickname should not longer than 10'))
      } else {
        callback()
      }
    }
    var validateDescription = (rule, value, callback) => {
      if (value.length >= 30) {
        callback(new Error('The length of nickname should not longer than 30'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        nickname: '',
        description: ''
      },
      rules: {
        required: true,
        nickname: [
          {validator: validateNickname, trigger: 'blur'}
        ],
        description: [
          {validator: validateDescription, trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.ruleForm.nickname = this.$store.state.auth.user.nickname
      this.ruleForm.description = this.$store.state.auth.user.description
    },
    setAvatar () {
      this.$router.push('uploadAvatar')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            nickname: this.ruleForm.nickname,
            description: this.ruleForm.description
          }
          var that = this
          axios.patch('/host/api/users/nicknameAndDescription', DataProcess.genFormData(data)).then((res) => {
            console.log(res)
            if (res.data.message !== 'Update fail') {
              let nickname = ['nickname', that.ruleForm.nickname]
              let description = ['description', that.ruleForm.description]
              that.$store.commit('UPDATE_USER', nickname)
              that.$store.commit('UPDATE_USER', description)
              that.$router.go(-1)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container {
    width 100%;
    height 100%;
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

  .ruleForm {
    width 94%;
    margin auto;
  }
</style>
