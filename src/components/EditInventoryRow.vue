<template>
    <div>
        <div @click="toggleShowEdit" class="table-row">
            <div class="cell">
                <input
                    v-if="item.showEdit"
                    type="checkbox"
                    id="checkbox"
                    v-model="item.avaliable"
                    v-on:input="updateAvailable($event, item.index)"
                />
                <div v-else>{{item.avaliable}}</div>
            </div>
            <div class="cell">
                <input
                    v-if="item.showEdit"
                    type="String"
                    v-model="item.name"
                    v-on:input="updateName($event, item.index)"
                />
                <div v-else>{{item.name}}</div>
            </div>
            <div class="cell">
                <input
                    v-if="item.showEdit"
                    type="String"
                    v-model="item.price"
                    v-on:input="updatePrice($event, item.index)"
                />
                <div v-else>{{item.price}}</div>
            </div>
            <div class="cell scroll">
                <input
                    v-if="item.showEdit"
                    type="String"
                    v-model="item.description"
                    v-on:input="updateDescription($event, item.index)"
                />
                <div v-else>{{item.description}}</div>
            </div>

            <div class="cell">{{ item.image }}</div>
        </div>
        
        <div v-if="item.showEdit" class="temp" @click="test">send event</div>
    </div>
</template>

<script>
import store from "@/store/index.js";
import MoneyFormat from "vue-money-format";
// import InventoryCard from './InventoryCard.vue'

export default {
    name: "EditInventoryRow",
    //   mounted() {
    //       this.localInventory = store.state.Inventory;
    //   },
    components: {
        "money-format": MoneyFormat
        // InventoryCard,
    },
    props: {
        menuItem: Object
    },
    data() {
        return {
            item: this.menuItem,
            price: 234.56,
            moneyVND: {
                decimal: ".",
                thousands: ".",
                prefix: "",
                suffix: " VND",
                precision: 2,
                masked: false
            },
            moneyUSD: {
                decimal: ".",
                thousands: ".",
                prefix: "$",
                suffix: " ",
                precision: 2,
                masked: false
            }
        };
    },
    watch: {
        item() {
            console.log("assigning item");
            //   item = menuItem;
            this.item.index = 0; // todo temp
        }
    },
    computed: {
        inventory: {
            get() {
                console.log(
                    "updateing........................................."
                );
                return this.$store.state.Inventory.map((value, index) => {
                    // value.price = value.price.toFixed(2);
                    // console.log(typeof(value.price))
                    return { ...value, index: index };
                });
                //this.$forceUpdate();
            }
            //   set(value) {
            //     console.log("setting..............");
            //     // this.$store.commit("toggleAvaliable", value.avaliable);
            //   },
        }
    },

    methods: {
        test() {
            console.log("test close");
            this.$emit("close", this.item.index);
        },
        toggleShowEdit() {
            console.log("toggling: ");
            if (!this.item.showEdit) {
                this.item.showEdit = true;
            }
        },
        updateAvailable(event, index) {
            console.log("setting Available... " + event.target.checked);

            // this.$store.commit("toggleAvaliable", index);
            this.$store.commit("updateAvaliable", {
                avaliable: event.target.checked,
                index: index
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
                index: index
            });
        },
        updateSection(event, index) {
            this.$store.commit("updateSection", {
                section: event.target.value,
                index: index
            });
        },
        updateAvaliable(event, index) {
            this.$store.commit("updateAvaliable", {
                avaliable: event.target.value,
                index: index
            });
        },
        updatePrice(event, index) {
            console.log(event);
            this.$store.commit("updatePrice", {
                price: event.target.value,
                index: index
            });
        },
        updateDescription(event, index) {
            this.$store.commit("updateDescription", {
                description: event.target.value,
                index: index
            });
        },
        updateImage(event, index) {
            this.$store.commit("updateImage", {
                image: event.target.value,
                index: index
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-row {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    height: 100px;
}
.cell {
    flex: 1 0 20%; // flex: grow shirnk percent
    border: 0.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.temp {
    position: absolute;
    background-color: green;
    top: 100px;
    right: 0vw;
    width: 40vw;
    height: 100px;
    z-index: 5;
}
</style>
