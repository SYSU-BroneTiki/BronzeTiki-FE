<template>
  <div class="container">
    <my-header HeaderName="Upload Avatar"></my-header>
    <div class="avatar-uploader">
      <el-upload
        class="el-upload"
        action="/host/api/users/avatar"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
import Header from './component/Header'
export default {
  components: {
    'my-header': Header
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res)
      let url = '/host' + res.avatar
      let avatar = ['avatar', url]
      this.$store.commit('UPDATE_USER', avatar)
      this.$router.go(-1)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="stylus" scoped>
  .avatar-uploader {
    text-align center;
    margin-top 50px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
