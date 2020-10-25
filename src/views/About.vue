<template>
  <div class="home">

       
    <Inventory></Inventory>
    
  </div>
</template>

<script>
// @ is an alias to /src

import Inventory from '@/components/Inventory.vue'

export default {
  name: 'About',
  components: {
    Inventory,
    
  }
}
</script>
