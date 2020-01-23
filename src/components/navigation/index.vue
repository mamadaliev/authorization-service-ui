<template>
  <div class="header">
    <div class="container">
      <div class="clh logo">
        <router-link to="/"></router-link>
      </div>
      <div class="clh search">
        <search/>
      </div>
      <div class="clh menu">
        <router-link to="/notes">Notes</router-link>
        <!-- <router-link to="/posts">Posts</router-link> -->
        <router-link to="/targets">Targets</router-link>
      </div>
      <div class="clh profile" v-loading="this.getAuth.isLogging">
        <span v-if="!getAuth.isLogged">
          <router-link to="/login">
            <el-button round>Sign in</el-button>
          </router-link>
          <router-link to="/register">
            <el-button type="primary" round>Create</el-button>
          </router-link>
        </span>
        <span v-if="getAuth.isLogged">
          <!-- <router-link to="/profile">{{ getUser.username }}</router-link> -->
          <div style="float:right">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link link">
                <el-avatar src="https://miro.medium.com/fit/c/256/256/2*TcVmfN1YLNDzz4NYofiv6Q.jpeg" 
                style="float:left;display:table;margin:10px 0;"> {{ getUser.username }} </el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user" class="menu-link">
                  <router-link to="/profile">My profile</router-link>
                </el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">Create note</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">Create group</el-dropdown-item>
                <el-dropdown-item icon="el-icon-setting">Settings</el-dropdown-item>
                <el-dropdown-item icon="el-icon-unlock">
                  <a href="" @click="fetchLogout()">Logout</a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="float:right">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link link">
                <el-badge :value="2" class="notify-count">
                </el-badge>
                <i class="notify el-icon-message-solid"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="notifications">
                  <div class="notification">Notification 1</div>
                  <div class="notification">Notification 2</div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"
  import search from "./../navigation/search"

  export default {
    name: "navigation",
    components: {
      search
    },
    data() {
      return {
        check: false
      }
    },
    computed: {
      ...mapGetters(["getAuth", "getUser"]),
    },
    methods: {
      ...mapActions(["fetchNewTokens", "fetchCurrentUser", "fetchLogout"]),
    },
    created() {
      this.fetchNewTokens();
      this.fetchCurrentUser();
    }
  }
</script>

<style scoped>
  /* header */
  .header {
    display: table;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08);
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

  /* search */
  .header .container .search {
    float: left;
    width: 250px;
    text-align: center;
  }

  /* menu */
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
    height: inherit;
    text-align: right;
  }
  .header .container .profile a {
    float: left;
    padding: 0 10px;
    text-decoration: none;
    color: #777;
  }
  .header .container .profile .link {
    cursor: pointer;
  }
  .avatar {
    float: left;
  }
  .el-dropdown-menu__item a {
    color: inherit;
    text-decoration: none;
  }
  .header .container .menu a:hover {
    color: #000;
  }

  /* notifications */
  .notify-count {
    position: absolute;
    margin: -4px 0 0 32px;
  }
  .notify {
    margin: 0 20px;
    font-size: 24px;
    line-height: 60px;
  }
  .notifications {
    display: table;
    width: 220px;
    min-height: 50px;
    max-height: 320px;
  }
  .notifications .notification {
    width: 100%;
    height: 50px;
  }

  /* container line height */
  .clh {
    line-height: 60px;
  }
</style>
