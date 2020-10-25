<template>
  <div class="inventory-container">
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
          <div
            v-for="(item, index) in inventory"
            :key="item.key"
            class="table-row"
          >
            <!-- <div class="cell"> {{item.chekbox}}</div> -->
            <!-- <div class="cell">
              <input
                type="checkbox"
                id="checkbox"
                v-model="inventory[index].avaliable"
              />
            </div> -->
            <div class="cell"><input type="checkbox" id="checkbox" v-model="item.avaliable" v-on:input="updateAvailable($event, index)"></div>
            <!-- <label for="checkbox">{{ avaliable}}</label> -->
            <div class="cell">{{ item.name }}</div>
            <div class="cell">{{ item.price }}</div>
            <div class="cell scroll">{{ item.description }}</div>
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
    inventory: {
      get() {
        console.log("updateing.........................................");
        return this.$store.state.Inventory;
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
    };
  },
  methods: {
    updateAvailable(event, index) {
      console.log("setting");

      this.$store.commit("toggleAvaliable", index);
    },
    back() {
      //   this.$router.push('/');
      this.$router.push({ name: "Home" });
    },
    // shows() {
    //   this.$store.commit("shows", this.shows);
    // },
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
