<template>
    <div class="card-container">
        <div class="image-container">
            <img src="@/assets/banh.jpg" width="100%" />
            <br />
        </div>
        <div class="product">
            <div class="name">{{ name }}</div>

            <div class="price">{{ price }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card4",
    props: {
        name: String,
        details: String,
        price: Number
    }
};
</script>

<style scoped lang="scss">
.card-container {
    //   width: 450px;
    //   height: 100px;
    border: 1px solid white;
    // align-items: center;
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    //    justify-content: space-around;

    border-radius: 50px 50px 50px 50px;

    background-color: rgb(248, 211, 143);
    margin-bottom: 30px;
    // align-content: flex-end; 
}
.product {
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    border-radius: 50px 50px 50px 50px;

    // background-color: rgb(255, 245, 231);
    // background-color: rgb(80, 160, 235);
    width: 100%;
    height: 50px; 
    font-size: 36px;
    // align-content: flex-end; 
    // text-align: flex-end; 
    align-items: flex-end; 
    margin-bottom: 15px; 


}

.image-container {
    // width: 100%;
    height: 100%;
}
</style>
