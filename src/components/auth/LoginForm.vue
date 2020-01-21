<template>
  <div class="auth-form">
    <el-form label-position="top" label-width="120px">
      <el-form-item prop="name">
        <el-input placeholder="Username" v-model="user.username" clearable></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="Password" v-model="user.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">Sign in</el-button>
          <el-button type="text" @click="resetForm('ruleForm')">Forgot Password?</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "LoginForm",
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
  .auth-form {
    margin: 100px 0;
  }
</style>
