<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation"

  export default {
    name: "app",
    components: {
      Navigation
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  a {
    color: royalblue;
  }
</style>
