<template>
  <div class="page-container">
    <div class="ui">
        <h1>The Windsor Tea House</h1>
      </div>
    <!-- <transition name="menu-transition"> -->
      <div class="container">
    <div v-show="menuOpen" class="menu2">
      <div>
      <h1>Menu</h1><br>
      <a class="section" href="#goto1"> Section 1 </a><br>
      <a class="section" href="#goto1"> Section 2</a><br>
      <a class="section" href="#goto1"> Section 3</a><br>
      <a class="section" href="#goto1"> Section 4</a><br>
      <a class="section" href="#goto1"> Section 5</a><br>
      <a class="section" href="#goto1"> Section 6</a><br>
      </div>
      <md-icon @click.native="close" id="button" class="md-size-2x fa fa-close"></md-icon>
    </div>
     <div class="body">
        <div class="title">
           <md-icon @click.native="menuOpen = !menuOpen" id="menu" class="md-size-2x fa fa-bars"></md-icon>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
            </div>
             <div class="list-container">
          <div class="flex-container">
              <div v-for="item in inventory" :key="item.key" class="list-item">
                  <Card4
                class="card4"
                v-if="item.avaliable && showCard == 4"
                @click.native="showModal"
                :name="item.name"
                :price="item.price"
                :details="item.details"
              ></Card4>
            </div>
          </div>

          <div id="goto1">
           text 1
          </div>
        </div>
      </div>

     
    <!-- </transition> -->

    <!-- <div class="container"> -->
      <!-- <Card @click.native="showModal"></Card> -->

      <!-- <div class="ui">
        <h1>The Windsor Tea House</h1>
      </div> -->
      <!-- <div @click="isToggle = !isToggle" :class="[isToggle ? 'blue' : 'yellow', 'toggle-box']">Toggle Box </div> -->
      <!-- <div class="box">
    <div @click="isRed = !isRed" :class="[isRed ? 'white' : 'red', 'red-box']">Box Red</div>
    <div @click="isGreen = !isGreen"  :class="[isGreen ? 'white' : 'green', 'green-box']"> Box Green</div>
    <div @click="isBlue = !isBlue" :class="[isBlue ? 'white' : 'blue', 'blue-box']">Box Blue</div>
    </div> -->
      <!-- <div class="body">
        <div class="title">
          <h1>Menu</h1> -->
          <!-- <button class="menu" @click="menuOpen = !menuOpen">Menu</button> -->
          <!-- <md-icon @click.native="menuOpen = !menuOpen" id="menu" class="md-size-2x fa fa-bars"></md-icon> -->
          <!-- <div class="menu-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a> -->
          <!-- </div> -->
          <!-- <md-icon>close</md-icon>
          <md-card> <md-card-header> HELLO </md-card-header></md-card>
          <span class="md-close">ok</span>
          <md-button class="md-icon-button md-primary">
            <md-icon>menu</md-icon>
          </md-button>
          <small>Flat</small> -->
          <!-- <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          /> -->

          
            <!-- <md-icon class="md-size-2x fa fa-bars"></md-icon> -->
            <!-- <md-icon class="fa fa-close"></md-icon> -->


            <!-- <md-icon class="fa fa-free-code-camp"></md-icon> -->
          
<!-- 
          <div>
            <md-icon class="fa fa-bars"></md-icon>
            <md-icon class="fa fa-plus"></md-icon>
            <md-icon class="fa fa-thumbs-up"></md-icon>
            <md-icon class="fa fa-shield"></md-icon>
            <md-icon class="fa fa-home"></md-icon>
          </div>
          <div>
            <md-icon>menu</md-icon>
            <md-icon>add</md-icon>
            <md-icon>thumb_up</md-icon>
            <md-icon>verified_user</md-icon>
            <md-icon>home</md-icon>
          </div> -->
        <!-- </div> -->

        <!-- <Modal
          v-if="showingModal"
          v-on:close="closeModal"
          :name="inventory[selectedID].name"
          :price="inventory[0].price + 'k'"
          :details="inventory[0].description"
        >
          Details</Modal
        ><br /> -->

        <!-- <div class="list-container">
          <div class="flex-container"> -->
            <!-- <div v-if="showCard == 1" >
            <Card1 class="list-item" v-for="item in inventory" :key="item.key" @click.native="showModal" :name="item.name" :price="item.price" :details="item.details"></Card1>
        </div> -->

            <!-- <div v-for="item in inventory" :key="item.key" class="list-item"> -->
              <!-- <Card1 v-if="item.avaliable && showCard == 1" @click.native="showModal" :name="item.name" :price="item.price" :details="item.details"></Card1>

          <Card2 v-if="item.avaliable && showCard == 2" @click.native="showModal" :name="item.name" :price="item.price" :details="item.details"></Card2>

          <Card3 v-if="item.avaliable && showCard == 3" @click.native="showModal" :name="item.name" :price="item.price" :details="item.details"></Card3> -->

              <!-- <Card4
                class="card4"
                v-if="item.avaliable && showCard == 4"
                @click.native="showModal"
                :name="item.name"
                :price="item.price"
                :details="item.details"
              ></Card4>
            </div>
          </div>

          <div id="goto1">
           text 1
          </div>
        </div>
      </div> -->
       <Modal
          v-if="showingModal"
          v-on:close="closeModal"
          :name="inventory[selectedID].name"
          :price="inventory[0].price + 'k'"
          :details="inventory[0].description"
        >
          Details</Modal
        ><br />
    </div>

    <!-- <div class="temp-holder"> -->
      <!-- <button @click="showCard1"> Card 1 </button>
        <button @click="showCard2"> Card 2 </button>
        <button @click="showCard3"> Card 3 </button> -->
      <!-- <button @click="showCard4">Card 4</button> -->

      <!-- final  -->
    <!-- </div> -->
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
// import Card1 from "@/components/Card.vue";
// import Card2 from "@/components/Card2.vue";
// import Card3 from "@/components/Card3.vue";
import Card4 from "@/components/Card4.vue";
import store from "@/store/index.js";

export default {
  name: "Grid",
  components: {
    Modal,
    // Card1,
    // Card2,
    // Card3,
    Card4,
  },
  data() {
    return {
      menuOpen: false,
      showingModal: false,
      selectedID: 0,

      showCard: 4,
    };
  },
  computed: {
    inventory() {
      console.log("getting inventory for Grid.vue");
      return store.state.Inventory;
    },
  },
  props: {
    msg: String,
  },
  methods: {
    showModal() {
      // alert('sadsadas')
      this.showingModal = true;
    },
    closeModal() {
      // alert('fhfhg 2222')
      this.showingModal = false;
    },

    //
    // temp
    // showCard1() {
    //     this.showCard = 1;
    // },
    // showCard2() {
    //     this.showCard = 2;
    // },
    // showCard3() {
    //     this.showCard = 3;
    // },
    showCard4() {
      this.showCard = 4;
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
@import "~vue-material/dist/vue-material.min.css";

.page-container {
  display: flex;

  flex-direction: column;
  width: 100vw;
}

.menu2 {
  display: fixed;
  // flex-direction: row;
  width: 3500px;
  will-change: width;
  background-color: green;
}
#menu-transition-enter,
#menu-transition-leave-to {
  width: 0px;
  background-color: blue;
}

#menu-transition-enter-to,
#menu-transition-leave {
  width: 30vw;
  background-color: green;
}
#menu-transition-enter-active,
#menu-transition-leave-active {
  transition: all 1s ease-out;
}

.container {
  // display: flex;
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;

  //   height: 100vh;
  //   overflow: scroll;
  border-radius: 50px 50px 50px 50px;
}
.list-container {
  display: flex;
  flex-direction: row;
  
  flex-wrap: wrap;
  width: 150%;
  margin: 0px auto;
  overflow: visible;
  //    background-color: yellow;
  padding: 30px;
}
.flex-container {
  //   background-color: black;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list-item {
  flex: 1 0 30%;
  margin: 5px;
  //   background-color: blue;
  width: 94%;
}
.title {
  width: 10%;
}
.body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
// .title {
//   background-color: white;
//   width: 30px;
//   height: 10px;
//   transition: all 3s;
// }
// .title:hover {
//   width: 200px;
//   height: 500px;
//   background-color:yellowgreen;
// }

.box {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.red-box {
  width: 150px;
  height: 150px;
  transition: all 5s;
}
.green-box {
  transition: all 5s;
  width: 150px;
  height: 150px;
}
.blue-box {
  transition: all 5s;
  width: 150px;
  height: 150px;
}
.white {
  background-color: white;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}

#menu-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
#menu-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
#menu-content a:hover {
  background-color: #f1f1f1;
}
.title:hover #menu-content {
  display: block;
}
.title:hover #menu {
  background-color: #3e8e41;
}
#menu {
  font-size: 30px;
  width: 160px;
  height: 50px;
}
.card4 {
  display: flex;
  // flex-direction: column;
  justify-content: space-around;
  // width: 50%;
}
small {
  display: block;
}
#button{
   position: absolute;
  top: 50px;
  left: 175px;
  // left: 40px;
  width: 75px;
  height: 75px;
 
}
.section{
  font-size: 20px;
}
</style>
