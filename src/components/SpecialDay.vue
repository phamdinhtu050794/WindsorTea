<template>
    <div class="day-container">
        <span>{{nowTime}}</span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="green"
            width="250"
            height="250"
            viewBox="0 8 24 24"
        >
            <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            />
            <text x="0" y="10" fill="red" font-size="4">
                <tspan x="2" dy=".6em">Special of</tspan>
                <tspan x="5" dy="1.2em">the Day</tspan>
                <!-- <tspan x="0" dy="1.2em">tspan line 3</tspan> -->
            </text>
        </svg>
    </div>
</template>

<script>
export default {
    name: "SpecialDay",
    props: {
        msg: String
    },
    data() {
        return {
            nowTime: null
        };
    },
    mounted() {
        this.setTime();

        window.setInterval(this.setTime, 1000); // milli seconds... 1000 == 1 second
    },
    methods: {
        setTime() {
            this.nowTime = this.moment().format("YYYY-MM-DD h:mm:ss a");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.day-container {
    position: absolute;
    right: 0%;
    font-size: 25px;
}

.green {
    // position: absolute;
    fill: green;
    transform: rotate(25deg);
}
</style>
