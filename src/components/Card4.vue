<template>
  <div class="card-container">
    <!-- <div class="image-container">
      <img src="@/assets/banh.jpg" />
      <br />
    </div>
    <div class="product">
      <div class="name">{{ name }}</div>

      <div class="price">{{ price }}</div>
    </div> -->

  
    <img src="@/assets/banh.jpg" >
    <div><b>{{name}}</b> </div>
    <div>Price : <b>{{price}}</b> </div>


  </div>
</template>

<script>
export default {
  name: "Card4",
  props: {
    name: String,
    details: String,
    price: Number,
  },
};
</script>

<style scoped lang="scss">
// .card-container {
//   width: 30vw;
//   height: 30vh;
//   border: 1px solid white;
//   display: flex;
//   flex-shrink: 1;
//   flex-direction: column;
//   justify-content: center;
//   border-radius: 50px;
//   background-color: rgb(248, 211, 143);
//   margin-bottom: 1%;
// }
// .product {
//   display: flex;
//   justify-content: space-around;
//   border-radius: 50px;
//   font-size: 26px;
//   padding-bottom: 1%;
// }

// .image-container img {
//   width: 50%;
//   height: 90%;
// }

.card-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // width: 30vw;
  height: 30vh;
  // border: 1px solid black;
  padding: 2%;
}
.card-container img{
  border: 1px solid black;
  border-radius: 15px;
  padding: 2%;
    width: auto;
  height: 90%;
  // height: auto;
}
</style>
