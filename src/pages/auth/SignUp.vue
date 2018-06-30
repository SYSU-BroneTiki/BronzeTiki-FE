<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <div class="Header">
        <p>Sign Up</p>
        <p>Welcome to BronzeTiki</p>
      </div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="UserName" prop="username">
          <el-input v-model="ruleForm2.username" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Repeat" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
          <el-button @click="resetForm('ruleForm2')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../user/component/Header'
import DataProcess from '../../common/utils/DataProcess'
export default {
  components: {
    Header
  },
  data () {
    var validateUserName = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('Please enter username'))
      } else if (!pattern.test(value)) {
        callback(new Error('请输入3-10个字母/数字/下划线'))
      } else if (this.usernameErrorMsg) {
        callback(this.usernameErrorMsg)
        this.usernameErrorMsg = ''
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      var pattern = /^\S{3,20}$/g
      if (value === '') {
        callback(new Error('Please enter password'))
      } else if (!pattern.test(value)) {
        callback(new Error('Please enter 3-20 non empty character'))
      } else if (this.passwordErrorMsg) {
        callback(this.passwordErrorMsg)
        this.passwordErrorMsg = ''
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        isSignIn: false,
        username: '',
        pass: '',
        checkPass: ''
      },
      rules2: {
        required: true,
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      passwordErrorMsg: '',
      usernameErrorMsg: ''
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userInfo = {
            username: this.ruleForm2.username,
            password: this.ruleForm2.pass
          }
          var that = this
          axios.post('/api/users/register', DataProcess.genFormData(userInfo)).then(function (res) {
            let message = res.data.message
            // register successfully
            switch (message) {
              case 'Username existed':
                that.usernameErrorMsg = message
                that.$refs.ruleForm2.validateField('username')
                break
              default:
                // 注册成功跳转到登陆页面
                that.$router.push('/signin')
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
    height 200px;
    position relative;
  }

  .Header p {
    position relative;
    top 60%;
    text-align center;
  }

  .Header p:first-child {
    font-size 40px;
    color #00b6f0;
  }

  .Header p:last-child {
    font-size 13px;
    color green;
    padding-top 8px;
  }
</style>
