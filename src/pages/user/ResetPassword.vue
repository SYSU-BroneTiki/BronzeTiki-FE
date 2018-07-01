<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="Header">
        <p>Reset your password</p>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="106px" class="demo-ruleForm">
        <el-form-item label="Old Password" prop="oldPassword">
          <el-input type="password" v-model="ruleForm.oldPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="New Password" prop="newPassword">
          <el-input type="password" v-model="ruleForm.newPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Repeat" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './component/Header'
import DataProcess from '../../common/utils/DataProcess'
export default {
  components: {
    Header
  },
  data () {
    var validateOldPassword = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('please input the password'))
      } else if (!pattern.test(value)) {
        callback(new Error('Invalid password'))
      } else if (this.oldPasswordErrorMsg) {
        callback(this.oldPasswordErrorMsg)
        this.oldPasswordErrorMsg = ''
      } else {
        callback()
      }
    }
    var validateNewPassword = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('Please input the password'))
      } else if (!pattern.test(value)) {
        callback(new Error('Invalid password'))
      } else if (value === this.oldPassword) {
        callback(new Error('New password is not same as old password'))
      } else if (this.newPasswordErrorMsg) {
        callback(this.newPasswordErrorMsg)
        this.newPasswordErrorMsg = ''
      } else {
        callback()
      }
    }
    var validatePassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter password'))
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error('The passwords are inconsistent'))
      } else {
        callback()
      }
    }
    return {
      oldPasswordErrorMsg: '',
      newPasswordErrorMsg: '',
      checkPasswordErrorMsg: '',
      ruleForm: {
        oldPassword: '',
        newPassword: '',
        checkPassword: ''
      },
      rules: {
        oldPassword: [
          {validator: validateOldPassword, trigger: 'blur'}
        ],
        newPassword: [
          {validator: validateNewPassword, trigger: 'blur'}
        ],
        checkPassword: [
          {validator: validatePassword2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        var that = this
        if (valid) {
          let user = {
            username: this.$store.state.auth.user.username,
            oldPassword: this.ruleForm.oldPassword,
            newPassword: this.ruleForm.newPassword
          }
          axios.post('/api/users/password', DataProcess.genFormData(user)).then(res => {
            let message = res.data.message
            switch (message) {
              case 'Invalid old password':
                that.oldPasswordErrorMsg = 'Password is invalid'
                that.$refs.ruleForm.validateField('oldPassword')
                break
              default:
                // 退出重新登陆
                that.$store.dispatch('SIGN_OUT').then(() => {
                  that.$router.push('/signin')
                })
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
  .content {
    width 90%
    margin auto
  }

  .Header {
    height 150px;
    position relative;
  }

  .Header p {
    font-size 25px;
    color #00b6f0;
    position relative;
    top 70%;
    text-align center;
  }
</style>
