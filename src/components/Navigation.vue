<template>
  <div class="header">
    <div class="container">
      <div class="clh logo">
        <router-link to="/"></router-link>
      </div>
      <div class="clh search">
        <!-- <search/> -->
      </div>
      <div class="clh menu">
        <router-link to="/note">Note</router-link>
        <!-- <router-link to="/posts">Posts</router-link> -->
        <router-link to="/progress">Progress</router-link>
      </div>
      <div class="clh profile">
        <router-link to="/login">
          <el-button round>Sign in</el-button>
        </router-link>
        <router-link to="/login">
          <el-button type="primary" round>Create</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import search from "./../components/navigation/search"

export default {
  name: "navigation",
  components: {
    // search
  }
}
</script>

<style scoped>
  .el-input__inner {
    border-radius: 50px;
  }
  /* header */
  .header {
    display: table;
    width: 100%;
    height: 60px;
    background-color: #fff;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, .07); */
  }

  /* container */
  .header .container {
    display: table;
    margin: 0 auto;
    width: 1200px;
    height: inherit;
  }

  .header .container .logo {
    float: left;
    width: 60px;
  }
  .header .container .logo a {
    float: left;
    width: 60px;
    height: 60px;
    background: url('~@/assets/logo.svg') no-repeat center;
    background-size: 36px;
    opacity: .9;
  }

  .header .container .search {
    float: left;
    width: 250px;
    text-align: center;
  }

  /** menu */
  .header .container .menu {
    display: block;
  }
  .header .container .menu a {
    padding: 0 20px;
    float: left;
    text-decoration: none;
    color: #777;
  }
  .header .container .menu a:hover {
    color: #000;
  }

  /* profile */
  .header .container .profile {
    float: right;
    width: 240px;
  }
  .header .container .profile a {
    float: left;
    padding: 0 10px;
    text-decoration: none;
    color: #777;
  }
  .header .container .menu a:hover {
    color: #000;
  }

  /* container line height */
  .clh {
    line-height: 60px;
  }
</style>
