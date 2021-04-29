<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>


export default {
  name: 'App',

  
}
</script>
<style src="vue-material/dist/vue-material.css"></style> 
<style lang="scss">
html {
  scroll-behavior: smooth; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0px;
  margin: 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  
}
</style>
