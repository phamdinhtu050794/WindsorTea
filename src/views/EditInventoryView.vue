<template>
  <div class="edit-container">
   <input v-model="inventory.name" label="name" required>
   <input v-model="inventory.price" label="price" required>
   <input v-model="inventory.description" label="description" required>
   <input v-model="inventory.image" label="image" required>


   <button  @click="save">Save</button>
  </div>
</template>

<script>
export default {
  name: 'EditInventoryView',
  data(){
      return{
          inventory: null,
      }
  },
  created() {
    if(this.$route.params.inventory) {
      this.inventory = this.$route.params.inventory;
    } else {
      this.inventory = { name:'', price:'', description:'', image:'' };
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('saveInventory', this.inventory);
      console.log('back');
      this.$router.push('/Inventory');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.edit-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
input{
    width: 50vw;
    height: 50px;
}

button{
    background-color: red;
}
</style>
