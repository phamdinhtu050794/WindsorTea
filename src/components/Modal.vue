<template>
  <div v-if="showModal" class="containerr">
    <div class="image-container">
      <img src="@/assets/tranong.jpg" height="400" width="500" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="details">
      <div>{{ details }}</div>
      <div class="price">{{ price }}</div>
    </div>
    <md-icon
      @click.native="close"
      id="button"
      class="md-size-3x fa fa-close"
    ></md-icon>
  </div>
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
      console.log("cccccclosing");
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
  background-color: rgb(245, 245, 245);
  // opacity: 0.5;
  margin: 0px auto;
  border: 1px solid white;
  border-radius:  50px;
}
.image-container {
  margin: 40px;
  left: 100px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  align-items: baseline;
  padding: 2%;
}
#button {
  position: absolute;
  top: 0px;
  right: 40px;
  width: 75px;
  height: 75px;
}
.name {
  font-size: 30px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 2%;
}
.price {
  font-size: 30px;
  top: 0px;
  align-self: flex-end;
}
</style>
