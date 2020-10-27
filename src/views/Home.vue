<template>
  <div class="home">
<!-- 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Card2 name="Tea Pot" price="$9.99"/>
    <Card2 name="Tea Pot" price="$9.99"/> -->
    
    
    <!-- <Grid> </Grid>      -->
    <Test> </Test> 
     <router-link to="/about">Inventory</router-link>
       
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Grid from '@/components/Grid.vue'
import Card2 from '@/components/Card2.vue'
import Test from '@/components/Test.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Grid,
    Card2,
    Test
  }
}
</script>
