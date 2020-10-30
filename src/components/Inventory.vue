<template>
  <div class="inventory-container">
    <!-- <input type="String" v-model="name" @input="updateName" />

    <input type="number" :value="section" @input="updateSection">
    <select @input="updateSection">
      <option :selected="0 == section">0</option>
      <option :selected="1 == section">1</option>
      <option :selected="2 == section">2</option>
      <option :selected="3 == section">3</option>
      <option :selected="4 == section">4</option>
      <option :selected="5 == section">5</option>
    </select>

    <input type="boolean" v-model="avaliable" @input="updateAvaliable" />
    <input type="number" v-model="price" @input="updatePrice" />
    <input type="String" v-model="description" @input="updateDescription" />
    <input type="String" v-model="image" @input="updateImage" />

    <br />
    For what index?
    <br />
    <input type="number" v-model="pickedIndex" /> -->

    <h1>Inventory</h1>
    <div class="top-container">
      <div class="table-header">
        <div class="cell">Avaliable</div>
        <div class="cell">Name</div>
        <div class="cell">Price</div>
        <div class="cell">Description</div>
        <div class="cell">Image</div>
      </div>
      <div class="table-body-container">
        <div class="table">
          <div v-for="item in inventory" :key="item.key" class="table-row">
            <!-- <div class="cell"> {{item.chekbox}}</div> -->
            <!-- <div class="cell">
              <input
                type="checkbox"
                id="checkbox"
                v-model="inventory[index].avaliable"
              />
            </div> -->
            <div class="cell">
              <input
                type="checkbox"
                id="checkbox"
                v-model="item.avaliable"
                v-on:input="updateAvailable($event, item.index)"
              />
            </div>
            <!-- <label for="checkbox">{{ avaliable}}</label> -->
            <div class="cell">
              <input
                type="String"
                v-model="item.name"
                v-on:input="updateName($event, item.index)"
              />
            </div>
            <div class="cell">
              <input
                type="number"
                v-model="item.price"
                v-on:input="updatePrice($event, item.index)"
              />
            </div>
            <div class="cell scroll">
              <input
                type="String"
                v-model="item.description"
                v-on:input="updateDescription($event, item.index)"
              />
            </div>

            <!-- to do  -->
            <div class="cell">{{ item.image }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <button class="button-back" @click="back">Back</button>
      <!-- <button class="button-update" @click="update">Update</button> -->
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "Inventory",
  //   mounted() {
  //       this.localInventory = store.state.Inventory;
  //   },
  computed: {
    // section: {
    //   get() {
    //     console.log(
    //       "Value of section: " +
    //         this.$store.state.Inventory[this.pickedIndex].section
    //     );
    //     return this.$store.state.Inventory[this.pickedIndex].section;
    //   },
    // },
    // avaliable: {
    //   get() {
    //     return this.$store.state.Inventory[this.pickedIndex].avaliable;
    //   },
    // },
    // name: {
    //   get() {
    //     return this.$store.state.Inventory[this.pickedIndex].name;
    //   },
    // },
    // price: {
    //   get() {
    //     return this.$store.state.Inventory[this.pickedIndex].price;
    //   },
    // },
    // description: {
    //   get() {
    //     return this.$store.state.Inventory[this.pickedIndex].description;
    //   },
    // },
    // image: {
    //   get() {
    //     return this.$store.state.Inventory[this.pickedIndex].image;
    //   },
    // },
    inventory: {
      get() {
        console.log("updateing.........................................");
        return this.$store.state.Inventory.map((value, index) => {
          return { ...value, index: index };
        });
        //this.$forceUpdate();
      },
      //   set(value) {
      //     console.log("setting..............");
      //     // this.$store.commit("toggleAvaliable", value.avaliable);
      //   },
    },
  },

  data() {
    return {
      //   localInventory: null
      // pickedIndex: 10,
    };
  },
  methods: {
    updateAvailable(event, index) {
      console.log("setting Available... " + event.target.checked);

      // this.$store.commit("toggleAvaliable", index);
      this.$store.commit("updateAvaliable", {
        avaliable: event.target.checked,
        index: index,
      });
    },
    back() {
      //   this.$router.push('/');
      this.$router.push({ name: "Home" });
    },
    // shows() {
    //   this.$store.commit("shows", this.shows);
    // },

    updateName(event, index) {
      this.$store.commit("updateName", {
        name: event.target.value,
        index: index,
      });
    },
    updateSection(event, index) {
      this.$store.commit("updateSection", {
        section: event.target.value,
        index: index,
      });
    },
    updateAvaliable(event, index) {
      this.$store.commit("updateAvaliable", {
        avaliable: event.target.value,
        index: index,
      });
    },
    updatePrice(event, index) {
      this.$store.commit("updatePrice", {
        price: event.target.value,
        index: index,
      });
    },
    updateDescription(event, index) {
      this.$store.commit("updateDescription", {
        description: event.target.value,
        index: index,
      });
    },
    updateImage(event, index) {
      this.$store.commit("updateImage", {
        image: event.target.value,
        index: index,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.inventory-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(226, 221, 170);
  border-radius: 50px 50px 50px 50px;
}
.top-contaienr {
  display: flex;
  flex-direction: column;
}
.table-header {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(236, 162, 132);
}
.table-body-container {
  height: 600px;
}
.table {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
}
.table-row {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  //    flex-direction: column;
  //     justify-content: center;
  text-align: center;
  height: 100px;
}
.bottom-container {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.cell {
  flex: 1 0 20%; // flex: grow shirnk percent
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  //  flex-direction: column;
  //   justify-content: center;
  // text-align: center;
}
.scroll {
  // background-color: green;
  overflow: scroll;
}
.button-back {
  // background-color: green;
  width: 100px;
  height: 50px;
  border-radius: 50px 50px 50px 50px;
}
.button-update {
  width: 100px;
  height: 50px;
  // background-color: red;
  border-radius: 50px 50px 50px 50px;
}
</style>
