<template>
  <div class="wrapper">
    <div class="container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('home') }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t('profile') }}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-card shadow="never" class="content">
        <h3>{{ getUser.username }}</h3>
        <div class="info">
          <div style="float:left;padding:0 20px 0 5px;height:100%;">
            <el-avatar shape="square" src="https://miro.medium.com/fit/c/256/256/2*TcVmfN1YLNDzz4NYofiv6Q.jpeg" 
                  style="display:table;margin:10px 0;width:100px;height:100px;"> {{ getUser.username }} </el-avatar>
          </div>
          <div style="display:table;">
            <div>
              Nickname: {{ getUser.username }}
            </div>
            <div>
              Email: {{ getUser.email }}
            </div>
            <div>
              Status: {{ getUser.status }}
            </div>
            <div>
              Roles: {{ getUser.roles }}
            </div>
            <div>
              Created date: {{ getUser.created }}
            </div>
            <div>
              Last visit: {{ getUser.updated }}
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "profile",
    data() {
      return {
        activeName: 'first'
      }
    },
    computed: {
      ...mapGetters(["getAuth", "getUser"]),
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: calc(100% - 60px);
  }
  .wrapper .container {
    padding: 20px 10px;
    width: 1200px;
    margin: 0 auto;
    height: inherit;
  }
  .wrapper .container .content {
    margin: 15px auto 15px auto;
    padding: 0 10px;
    width: 540px;
    /* border: 1px solid #EBEEF5; */
  }
  .info {
    line-height: 30px;
  }
</style>
