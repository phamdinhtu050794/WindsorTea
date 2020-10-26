<template>
    <div class="page-container">
        <md-icon v-show="!menuOpen" @click.native="menuOpen = !menuOpen" class="md-size-2x fa fa-bars menu-button"></md-icon>
        <md-icon v-show="menuOpen" @click.native="menuOpen = !menuOpen" class="md-size-2x fa fa-close menu-button"></md-icon>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div class="title">
            <h1>The Windsor Tea House</h1>
        </div>

        <!-- <transition name="menu-transition"> -->
        <div class="container">
            <transition name="menu-box">
                <!-- <div v-show="menuOpen" class="menu-box-bottom">
                </div>  -->
                <div v-show="menuOpen" class="menu-box">
                   
                        <h1>Menu</h1>
                        <br />
                        <a class="section" href="#goto1">Section 1</a>
                        <br />
                        <a class="section" href="#goto1">Section 2</a>
                        <br />
                        <a class="section" href="#goto1">Section 3</a>
                        <br />
                        <a class="section" href="#goto1">Section 4</a>
                        <br />
                        <a class="section" href="#goto1">Section 5</a>
                        <br />
                        <a class="section" href="#goto1">Section 6</a>
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

                    <div id="goto1">text 1</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Card4 from "@/components/Card4.vue";
import store from "@/store/index.js";

export default {
    name: "Test",
    components: {
        Modal,
        Card4
    },
    data() {
        return {
            menuOpen: false,
            showingModal: false,
            selectedID: 0,

            showCard: 4
        };
    },
    computed: {
        inventory() {
            console.log("getting inventory for Grid.vue");
            return store.state.Inventory;
        }
    },
    props: {
        msg: String
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

        showCard4() {
            this.showCard = 4;
        },
        close() {
            console.log("cccccclosing");
            // alert('gfhfhg')
            this.$emit("close");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~vue-material/dist/vue-material.min.css";

.title {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: turquoise;
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
    // width: 90vw;
    width: 20vw; 
    height: 90vh; 
    // will-change: width;
    background-color: red;
    z-index: -2; 
}
.menu-box {
    display: flex; 
    position: fixed; 
    flex-direction: column; 
    justify-content: space-around;
    // width: 90vw;
    width: 20vw; 
    height: 90vh; 
    // will-change: width;
    background-color: green;

    // margin-left: 0px; 
    z-index: 20; 
}
.menu-box-enter,
.menu-box-leave-to {
    width: 0px;
    // margin-left: 0px; 
    background-color: blue;
}

.menu-box-enter-to,
.menu-box-leave {
    width: 20vw;
    // margin-left: 200px; 
    background-color: yellow;
}
.menu-box-enter-active,
.menu-box-leave-active {
    transition: all 3s ease-out;
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

.body {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    background-color: pink;
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
    background-color: grey;
    padding: 30px;
    justify-content: space-between;
}

.list-item {
    display: flex;
    min-width: 0px;
    flex: 0 10 30%;
    // margin: 5px;
    background-color: purple;
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


.menu-button {
    position: fixed;
    top: 2vh;
    left: 2vh;
    font-size: 30px;
    width: 160px;
    height: 50px;
}

</style>
