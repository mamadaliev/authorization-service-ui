<template>
  <div style="height:100%">
    <div class="wrapper">
      <div class="content">
        <div class="left-content">
          <LoginForm/>
        </div>
        <div class="right-content">
          ...111
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginForm from "./../components/auth/LoginForm"

  export default {
    name: "login",
    components: {
      LoginForm
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    background: #000 url("http://h1.f.mf-image.ru/d/eyJ0IjoiMjAyMC0wMS0yM1QwNTowMzoxNC4zNjg4NjM3WiIsInRtIjoxNSwiYmQiOjEsImZkIjo2MTAzMzIwLCJyZiI6bnVsbCwic2wiOjAsImZuIjpudWxsLCJyIjoiaHR0cHM6Ly9teS1maWxlcy5ydS9pN3JybWkiLCJsIjpudWxsfQ,,.AE24CD165C16BD14EFB57CDB4FB107C6./wallpaperflare.com_wallpaper.jpg");
  }
  .wrapper .content {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .wrapper .content .left-content {
    display: flex;
    float: left;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
  }
  .wrapper .content .right-content {
    display: table;
    width: 50%;
    height: 100%; 
  }
</style>
