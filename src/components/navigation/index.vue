<template>
  <div class="header" v-if="getAuth.isLogged">
    <div class="container">
      <div class="clh logo">
        <router-link to="/"></router-link>
      </div>
      <div class="clh search">
        <search/>
      </div>
      <div class="clh menu">
        <router-link to="/notes">{{ $t('notes') }}</router-link>
        <!-- <router-link to="/posts">Posts</router-link> -->
        <router-link to="/targets">{{ $t('targets') }}</router-link>
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
                <el-tooltip class="item" effect="dark" :content="getUser.username" placement="left">
                  <el-avatar src="https://miro.medium.com/fit/c/256/256/2*TcVmfN1YLNDzz4NYofiv6Q.jpeg" 
                  style="float:left;display:table;margin:10px 0;"> {{ getUser.username }} </el-avatar>
                </el-tooltip>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/profile">
                  <el-dropdown-item icon="el-icon-user">My profile</el-dropdown-item>
                </router-link>
                <el-dropdown-item icon="el-icon-circle-plus">Create note</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">Create group</el-dropdown-item>
                <router-link to="/profile/settings">
                  <el-dropdown-item icon="el-icon-setting">Settings</el-dropdown-item>
                </router-link>
                <a href="" @click="fetchLogout()">
                  <el-dropdown-item icon="el-icon-unlock">Logout</el-dropdown-item>
                </a>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="float:right">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-badge :value="5" class="notify-count">
                </el-badge>
                <i class="notify el-icon-message-solid"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="notifications">
                  <div class="notification">
                    <span class="title">Test notification 5</span>
                    <span class="body">Someone text of notification.</span>
                  </div>
                  <div class="notification">
                    <span class="title">Test notification 4</span>
                    <span class="body">Someone text of notification.</span>
                  </div>
                  <div class="notification">
                    <span class="title">Test notification 3</span>
                    <span class="body">Someone text of notification.</span>
                  </div>
                  <div class="notification">
                    <span class="title">Test notification 2</span>
                    <span class="body">Someone text of notification.</span>
                  </div>
                  <div class="notification">
                    <span class="title">Test notification 1</span>
                    <span class="body">Someone text of notification.</span>
                  </div>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="float:right">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <flag iso="us"/> English <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a @click="setLocale('us')">
                  <el-dropdown-item><flag iso="us"/> English</el-dropdown-item>
                </a>
                <a @click="setLocale('ru')">
                  <el-dropdown-item><flag iso="ru"/> Русский</el-dropdown-item>
                </a>
                <a @click="setLocale('de')">
                  <el-dropdown-item><flag iso="de"/> Deutch</el-dropdown-item>
                </a>
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
      setLocale(locale) {
        import(`./../../langs/${locale}.json`).then((messages) =>  {
          this.$i18n.setLocaleMessage(locale, messages)
          this.$i18n.locale = locale
        })
      },
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
  .el-dropdown-link {
    cursor: pointer;
    outline: none;
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
    display: block;
    width: 320px;
    min-height: 50px;
    max-height: 320px;
    height: 200px;
    overflow-y: scroll;
    -ms-overflow-style: none;
  }
  /* .notifications::-webkit-scrollbar {
    display: none;
  } */
  .notifications .notification {
    display: block;
    padding: 10px;
    width: calc(100% - 20px);
    height: 50px;
    font-size: 14px;
  }
  .notifications .notification:hover {
    background-color: #ecf5ff;
    cursor: pointer;
  }
  .notifications .notification:hover .title{
    color: #66b1ff;
  }
  .notifications .notification .title {
    display: table;
    font-weight: bold;
    line-height: 22px;
    /* color: #409eff; */
  }
  .notifications .notification .body {
    font-size: 12px;
    line-height: 18px;
    color: #606266;
  }

  /* container line height */
  .clh {
    line-height: 60px;
  }
  /* width */
  .notifications::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  .notifications::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  .notifications::-webkit-scrollbar-thumb {
    background: #C0C4CC;
  }

  /* Handle on hover */
  .notifications::-webkit-scrollbar-thumb:hover {
    background: #606266;
  }
</style>
