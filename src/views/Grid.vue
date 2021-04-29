<template>
  <div class="page-container">
    <md-icon
      v-show="!menuOpen"
      @click.native="menuOpen = !menuOpen"
      class="md-size-2x fa fa-bars menu-button"
    ></md-icon>
    <md-icon
      v-show="menuOpen"
      @click.native="menuOpen = !menuOpen"
      class="md-size-2x fa fa-close menu-button"
    ></md-icon>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="title">
      <h1>The Windsor Tea House</h1>
    </div>
    <SpecialDay class="day"></SpecialDay>
    <div class="container">
      <transition name="menu-box-bottom">
        <div v-show="menuOpen" class="menu-box-bottom"></div>
      </transition>
      <transition name="menu-box">
        <div v-show="menuOpen" class="menu-box">
          <h1>Menu</h1>
          <br />
          <a class="section" href="#goto0">Section 1</a>
          <br />
          <a class="section" href="#goto1">Section 2</a>
          <br />
          <a class="section" href="#goto2">Section 3</a>
          <br />
          <a class="section" href="#goto3">Section 4</a>
          <br />
          <a class="section" href="#goto4">Section 5</a>
          <br />
          <a class="section" href="#goto5">Section 6</a>
          <br />
        </div>
      </transition>

      <div class="body">
        <div class="list-container">
          
          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <div id="goto0">text 1</div>
          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <div id="goto1">text 2</div>

          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <div id="goto2">Text 3</div>

          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <div id="goto3">Text 4</div>
          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <div id="goto4">Text 5</div>

          <div v-for="item in inventory" :key="item.key" class="list-item">
            <Card4
              v-if="item.avaliable && showCard == 4"
              @click.native="showModal"
              :name="item.name"
              :price="item.price"
              :details="item.details"
            ></Card4>
          </div>
          <br />
          <br />
          <br />
          <!-- <div id="goto5">Text 6</div> -->
        </div>
      </div>
    </div>
    <Modal
      v-if="showingModal"
      v-on:close="closeModal"
      :name="inventory[selectedID].name"
      :price="inventory[0].price + 'k'"
      :details="inventory[0].description"
      >Details</Modal
    >
    <br />
  </div>

  
</template>

<script>
import Modal from "./../components/Modal.vue";
import Card4 from "./../components/Card4.vue";
import SpecialDay from "./../components/SpecialDay.vue";
import store from "./../store/index";

export default {
  name: "Grid",
  components: {
    Modal,
    Card4,
    SpecialDay,
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
    getSection_0() {
      return store.state.Inventory.filter((item) => {
        return item.section == 0;
      });
    },
    getSection_1() {
      return store.state.Inventory.filter((item) => {
        return item.section == 1;
      });
    },
    getSection_2() {
      return store.state.Inventory.filter((item) => {
        return item.section == 2;
      });
    },
    getSection_3() {
      return store.state.Inventory.filter((item) => {
        return item.section == 3;
      });
    },
    getSection_4() {
      return store.state.inventory.filter((item) => {
        return item.section == 4;
      });
    },
    getSection_5() {
      return store.state.Inventory.filter((item) => {
        return item.section == 4;
      });
    },
    getSection_6() {
      return store.state.Inventory.filter((item) => {
        return item.section == 5;
      });
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
      this.showingModal = false;
    },
    showCard4() {
      this.showCard = 4;
    },
    close() {
      console.log("cccccclosing");
      this.$emit("close");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~vue-material/dist/vue-material.min.css";

.title {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}
.page-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
.menu-box-bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20vw;
  height: 90vh;
}
.menu-box {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-around;
  width: 17vw;
  height: 90vh;
  background-color: whitesmoke;
  border-radius: 50px;
}
.menu-box-enter,
.menu-box-leave-to {
  transform: translate(-17vw, 0px);
  opacity: 0;
  position: fixed;
}
.menu-box-enter-to,
.menu-box-leave {
  transform: translate(0px);
  opacity: 100;
  position: fixed;
}
.menu-box-enter-active,
.menu-box-leave-active {
  transition: all 1s ease-out;
}
.menu-box-bottom-enter,
.menu-box-bottom-leave-to {
  width: 0px;
  opacity: 0;
}
.menu-box-bottom-enter-to,
.menu-box-bottom-leave {
  width: 20vw;
  opacity: 100;
}
.menu-box-bottom-enter-active,
.menu-box-bottom-leave-active {
  transition: all 1s ease-out;
}
.container {
  display: flex;
  flex-direction: row;
  border-radius: 50px;
}
.body {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 0px;
}
.list-container {
  display: flex;
  flex-direction: row;
  min-width: 0px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0px auto;
  overflow: visible;
  padding: 30px;
  justify-content: space-between;
}

.list-item {
  display: flex;
  min-width: 0px;
  flex: 0 10 30%;
  // height: 30%;
  justify-content: space-around;
  overflow: hidden;
}
#menu-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
.menu-button {
  position: fixed;
  top: 1vh;
  font-size: 30px;
  width: 160px;
  height: 50px;
}
.day {
  position: fixed;
  right: 2vh;
  top: 2vh;
}
</style>
