<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from "./components/navigation"

  export default {
    name: "app",
    components: {
      Navigation
    }
  }
</script>

<style>
  html, body {
    margin:0; 
    padding:0; 
    height:100%; 
    font-family: 'Roboto', sans-serif;
  }
  a {
    color: royalblue;
    text-decoration: none;
  }
  #app {
    height: 100%;
  }
</style>
