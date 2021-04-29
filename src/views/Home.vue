<template>
  <div class="home">
    <Grid> </Grid>     
     <router-link to="/about">Inventory</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Grid from '@/views/Grid.vue'
// import Card2 from '@/views/Card2.vue'
// import Test from '@/components/Test.vue'
// import CreateCRUD from '@/components/CreateCRUD.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Grid,
    // Card2,
    // Test,
    // CreateCRUD
  }
}
</script>
