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
          <el-button type="primary" @click="login()">Sign in</el-button>
          <router-link to="/">
            <el-button type="text" class="forgot">Forgot Password?</el-button>
          </router-link>
      </el-form-item>
    </el-form>
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
    margin: 100px 0;
  }
  .forgot {
    margin: 0 20px;
  }
</style>
