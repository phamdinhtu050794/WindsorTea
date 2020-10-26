<template>
  <!-- <button @click="showModal = !showModal">Details</button> -->
  <div v-if="showModal" class="containerr">
    
    <div class="image-container">
      <img src="@/assets/tranong.jpg" height="400" width="500" />
    </div>
    
    
    <!-- <div class="description"> -->
      <!-- <div> -->
       <div class="name"> {{ name }}</div>
      <!-- </div> -->
      <!-- <div class="details"> -->
        <div class="details">
        <div>{{ details }}</div>
        <div class="price">{{ price }}</div>
        </div>
      <!-- </div> -->
    
    

      <!-- <div class="footer"> -->
        
        <!-- <button class="button" @click="close">X</button> -->
        <!-- <button @click="close"> -->
            <md-icon @click.native="close" id="button" class="md-size-3x fa fa-close"></md-icon>
        <!-- </button> -->
      <!-- </div> -->
    
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: true, // todo
    };
  },
  props: {
    name: String,
    details: String,
    price: String,
  },
  methods: {
    showAlert() {
      this.showModal = !this.showModal;
    },
    close() {
      console.log("cccccclosing")
      // alert('gfhfhg')
      this.$emit("close");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.containerr {
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 1;
  top: 100px;
  left: 250px;

  width: 70%;
  background-color: khaki;
  
  margin: 0px auto;

  border: 1px solid white;
  

  border-radius: 0px 50px;
  
}
.image-container {
  margin: 40px;
  left: 100px;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;
  // text-align: center;
  // left: 50%;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
}
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  margin: 20px;

}
.details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-left: 100px;
  // margin-right: 80px;
}
#button{
  position: absolute;
  top: 0px;
  right: 40px;
  // left: 40px;
  width: 75px;
  height: 75px;
  background-color:red;
}
.name{
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.price{
  font-size: 30px;
  top: 0px;
  align-self:flex-end;
  // display: flex;
  // flex-direction: column;
  // justify-content:center;
  
}
</style>
