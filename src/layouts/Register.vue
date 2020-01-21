<template>
  <div class="wrapper">
    <div class="content">
      <div class="auth-form">
        <el-form label-position="top" label-width="120px">
          <el-form-item prop="name">
            <el-input placeholder="Username" v-model="user.username" clearable></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input placeholder="Email" v-model="user.password" clearable></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input placeholder="Password" v-model="user.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Create account</el-button>
              <el-button type="solid" @click="resetForm('ruleForm')">Clear</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .wrapper .content {
    width: 320px;
    margin: 0 auto;
  }
  .wrapper .content .auth {
    width: 100%;
    height: auto;
  }
  .auth-form {
    margin: 100px 0;
  }
</style>
