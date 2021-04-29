<template>
  <div class="inventorycard-container">
  
    <div>
      {{ inventory.name }}
    </div>
    <div>
      {{ inventory.price }}
    </div>
    <div>
      {{ inventory.description }}
    </div>
    <div>
      {{ inventory.image }}
    </div>
    <div>
      <button @click="$emit('delete', inventory)">Delete</button>
      <button @click="$emit('edit', inventory)">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InventoryCard",
  props: ["inventory"],

  created(){
      console.log('inventory create');
  },


  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.inventorycard-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
