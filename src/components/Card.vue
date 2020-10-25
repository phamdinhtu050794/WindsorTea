<template>
  <div class="card-container">
    
      <div class="image-container">
      <img src="@/assets/trada.jpg" width="80%"/><br /></div>
      <div class="product">
       <div> {{ name }} </div>
      
        <!-- <div>{{ details }}</div> -->
        
        <div>{{ price }}</div>
      
      </div>
    
    
  </div>
</template>

<script>
export default {
   name: "Card1",
  props: {
    
    name: String,
    details: String,
    price: Number,

  },
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-container {
  width: 450px;
  height: 400px;
   border:1px solid white;
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   
   border-radius:50px 50px 50px 50px ;

background-color:azure;
}
.product{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius:50px 50px 50px 50px ;

    // background-color: rgb(255, 245, 231);
    background-color: rgb(228, 255, 255);
    width: 80%;
}
.image-container{
    width: 80%;
    
}

</style>
