<template>
  <div class="createcrud-container">
     <input type="String" v-model="name" @input="updateName">
     
     <!-- <input type="number" :value="section" @input="updateSection"> -->
     <select @input="updateSection" >
         <option :selected="0==section">0</option>
         <option :selected="1==section">1</option>
         <option :selected="2==section">2</option>
         <option :selected="3==section">3</option>
         <option :selected="4==section">4</option>
         <option :selected="5==section">5</option>
     </select>
     
     <input type="boolean" v-model="avaliable" @input="updateAvaliable">
     <input type="number" v-model="price" @input="updatePrice">
     <input type="String" v-model="description" @input="updateDescription">
     <input type="String" v-model="image" @input="updateImage">

     <br> 
     For what index? 
     <br> 
       <input type="number" v-model="pickedIndex">
  </div>
</template>

<script>
export default {
  name: 'CreateCRUD',
  data() {
      return {
          pickedIndex: 10
      }
  },
  computed:{
      section:{
          get(){
              console.log("Value of section: " + this.$store.state.Inventory[this.pickedIndex].section);
              return this.$store.state.Inventory[this.pickedIndex].section;
          }
      },
      avaliable:{
          get(){
              return this.$store.state.Inventory[this.pickedIndex].avaliable;
          }
      },
      name:{
          get(){
              return this.$store.state.Inventory[this.pickedIndex].name;
          },
        
      },
      price:{
          get(){
              return this.$store.state.Inventory[this.pickedIndex].price;
          }
      },
      description:{
          get(){
              return this.$store.state.Inventory[this.pickedIndex].description;
          }
      },
      image:{
          get(){
              return this.$store.state.Inventory[this.pickedIndex].image;
          }
      }
      
      
      
    //   ...mapState({
    //       name: state => state.Inventory.name
    //   })
      
  },
  methods:{
      updateName(e){
          this.$store.commit('updateName', {name: e.target.value, index: this.pickedIndex} )
      }, 
      updateSection(e){
          this.$store.commit('updateSection', {section: e.target.value, index: this.pickedIndex})
      },
      updateAvaliable(e){
          this.$store.commit('updateAvaliable', {avaliable: e.target.value, index: this.pickedIndex})
      },
      updatePrice(e){
          this.$store.commit('updatePrice', {price: e.target.value, index: this.pickedIndex})
      },
      updateDescription(e){
          this.$store.commit('updateDescription', {description: e.target.value, index: this.pickedIndex})
      },
      updateImage(e){
          this.$store.commit('updateImage', {image: e.target.value, index: this.pickedIndex})
      }


  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
