<template>
  <div class="card-container">
      <div class="product">
       <div> {{ name }} </div>
      
        <!-- <div>{{ details }}</div> -->
        
        <div>{{ price }}</div>
      
      </div>
      <div class="image-container">
          <!-- <div> {{ name }} </div> -->
      <img src="@/assets/banh.jpg" width="100%"/><br /></div>
      
    
    
  </div>
</template>

<script>
export default {
   name: "Card3",
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
  width: 400px;
  height: 450px;
   border:1px solid white;
   align-items: center;
   display: flex;
   flex-direction: column;
//    justify-content: space-around;
   
   border-radius:50px 50px 50px 50px ;

    background-color: rgb(248, 211, 143);
    margin: 20px;
}
.product{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius:50px 50px 50px 50px ;

    // background-color: rgb(255, 245, 231);
    // background-color: rgb(80, 160, 235);
    width: 80%;
}
.image-container{
    width: 100%;
    // height: 80%;
    
}

</style>
