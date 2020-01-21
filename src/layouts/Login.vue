<template>
  <div>
    <div class="wrapper">
      <div class="content">
        <LoginForm/>
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
  }
  .wrapper .content {
    width: 320px;
    margin: 0 auto;
  }
  .wrapper .content .auth {
    width: 100%;
    height: auto;
  }
</style>
