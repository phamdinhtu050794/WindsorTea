<template>
<div class="container"> 
    <div class="card-container">
        <div class="image-container">
            <img src="@/assets/teapotalpha.png" width="100%" />
        </div>
        <div class="product">
            <div>{{ name }}</div>
            <!-- {{ details }} -->
            <div>{{ price }}</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "Card2",
    props: {
        name: String,
        details: String,
        price: Number
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container { 
    height: 300px; 

// background-color: purple;
}
.card-container {
    width: 400px;
    height: 200px;
    border: 1px solid white;
    border-radius: 50px 50px 50px 50px;
    background-color: rgb(159, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 
    align-items: center; 
    // background-color: red; 
}
.product {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
    background-color: rgb(255, 226, 96); 
    border-radius: 50px 50px 50px 50px;
}
.image-container {
    width: 90%;
    // display: flex; 
    // background-color: red; 
}
</style>