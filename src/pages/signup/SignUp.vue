<template>
  <div class="container">
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
      <el-form-item label="RePassword" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
        <el-button @click="resetForm('ruleForm2')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validateUserName = (rule, value, callback) => {
      var pattern = /^[\w]{3,10}$/g
      if (value === '') {
        callback(new Error('Please enter username'))
      } else if (!pattern.test(value)) {
        callback(new Error('请输入3-10个字母/数字/下划线'))
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
        pass: ''
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
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/')
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
