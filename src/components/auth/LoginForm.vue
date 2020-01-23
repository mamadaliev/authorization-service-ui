<template>
  <div class="auth-form">
    <el-form label-position="top" label-width="120px">
      <el-form-item prop="name">
        <el-input placeholder="Nickname or Email" v-model="user.username" autofocus=true clearable></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input placeholder="Password" v-model="user.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="login()" :loading="getAuth.isLogging" round>Sign in</el-button>
          <router-link to="/">
            <el-button type="text" class="forgot">Forgot Password?</el-button>
          </router-link>
      </el-form-item>
    </el-form>
    <div class="create-button">
      <router-link to="/register">
        <el-button round><u>Create an account</u></el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'login',
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapGetters(["getUser", "getAuth"])
    },
    methods: {
      ...mapActions(["fetchLogin"]),
      ...mapMutations(["isLogging"]),

      login() {
        // console.log(this.user);
        this.isLogging(true);
        this.fetchLogin(this.user);
      }
    }
  }
</script>

<style scoped>
  .auth-form {
    width: 320px;
    margin: 0 auto;
    margin-top: 45%;
    text-align: center;
  }
  .forgot {
    margin: 0 20px;
  }
  .create-button {
    display: block;
    margin: 200px auto 0 auto;
  }
</style>
