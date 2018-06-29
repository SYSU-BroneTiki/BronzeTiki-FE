<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="Header">
        <p>Reset your PayPassword</p>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="134px" class="demo-ruleForm">
        <el-form-item label="Old Pay Password" prop="oldPayPassword">
          <el-input type="password" v-model="ruleForm.oldPayPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="New Pay Password" prop="newPayPassword">
          <el-input type="password" v-model="ruleForm.newPayPassword" auto-complete="off"></el-input>
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
import DataProcess from '../../common/utils/DataProcess'
import Header from './component/Header'
export default {
  components: {
    Header
  },
  data () {
    var validateoldPayPassword = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('please input the password'))
      } else if (!pattern.test(value)) {
        callback(new Error('Invalid password'))
      } else if (this.oldPayPasswordErrorMsg) {
        callback(this.oldPayPasswordErrorMsg)
        this.oldPayPasswordErrorMsg = ''
      } else {
        callback()
      }
    }
    var validatenewPayPassword = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('Please input the password'))
      } else if (!pattern.test(value)) {
        callback(new Error('Invalid password'))
      } else if (value === this.oldPayPassword) {
        callback(new Error('New password is not same as old password'))
      } else if (this.newPayPasswordErrorMsg) {
        callback(this.newPayPasswordErrorMsg)
        this.newPayPasswordErrorMsg = ''
      } else {
        callback()
      }
    }
    var validatePassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter password'))
      } else if (value !== this.ruleForm.newPayPassword) {
        callback(new Error('The passwords are inconsistent'))
      } else {
        callback()
      }
    }
    return {
      oldPayPasswordErrorMsg: '',
      newPayPasswordErrorMsg: '',
      checkPasswordErrorMsg: '',
      ruleForm: {
        oldPayPassword: '',
        newPayPassword: '',
        checkPassword: ''
      },
      rules: {
        oldPayPassword: [
          {validator: validateoldPayPassword, trigger: 'blur'}
        ],
        newPayPassword: [
          {validator: validatenewPayPassword, trigger: 'blur'}
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
            oldPayPassword: this.ruleForm.oldPayPassword,
            newPayPassword: this.ruleForm.newPayPassword
          }
          axios.patch('/host/api/users/payPassword', DataProcess.genFormData(user)).then(res => {
            let message = res.data.message
            switch (message) {
              case 'Invalid old password':
                that.oldPayPasswordErrorMsg = 'Password is invalid'
                that.$refs.ruleForm.validateField('oldPayPassword')
                break
              default:
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
  .content {
    width 98%
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
