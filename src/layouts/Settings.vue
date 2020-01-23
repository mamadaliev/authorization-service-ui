<template>
  <div class="wrapper">
    <div class="container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/profile' }">{{ $t('profile') }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t('settings') }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
        <h1>{{ $t('settings') }}</h1>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="User" name="first">

          <div class="info">
            <div style="float:left;padding:0 20px 0 5px;height:100%;">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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


          </el-tab-pane>
          <el-tab-pane label="History" name="second">
            <div class="history-sort">
                <el-radio-group v-model="reverse">
                  <el-radio :label="false">descending</el-radio>
                  <el-radio :label="true">ascending</el-radio>
                </el-radio-group>
              </div>
              <el-timeline :reverse="reverse">
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp">
                  {{activity.content}}
                </el-timeline-item>
              </el-timeline>
          </el-tab-pane>
          <el-tab-pane label="Subscribtions" name="third">Subscribtions</el-tab-pane>
          <el-tab-pane label="Account" name="fourth">Account</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "settings",
    data() {
      return {
        imageUrl: '',
        activeName: 'first',
        reverse: true,
        activities: [
          {
            content: 'MacOSX 11',
            timestamp: '2020-01-23, 13:27'
          },
          {
            content: 'Android 9. Mi T9',
            timestamp: '2020-01-23, 11:47'
          },
          {
            content: 'MacOSX 11',
            timestamp: '2020-02-23, 09:02'
          },
          {
            content: 'MacOSX 11',
            timestamp: '2020-02-23, 08:10'
          },
          {
            content: 'MacOSX 11',
            timestamp: '2020-02-23, 06:44'
          },
          {
            content: 'MacOSX 11',
            timestamp: '2020-02-23, 04:32'
          }
        ]
      }
    },
    computed: {
      ...mapGetters(["getAuth", "getUser"]),
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
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
    padding: 30px 0;
    width: 540px;
    margin: 0 auto;
    /* border: 1px solid #EBEEF5; */
  }
  .info {
    line-height: 30px;
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
  .history-sort {
    display: table;
    padding: 30px 0;
  }
</style>
