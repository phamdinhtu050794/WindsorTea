<template>
  <div class="home">
    <Grid> </Grid>     
     <router-link to="/inventory">Inventory</router-link>
  </div>
</template>

<script>
import Grid from '@/views/Grid.vue'

export default {
  name: 'Home',
  components: {
    Grid,
  }
}
</script>
