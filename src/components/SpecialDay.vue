<template>
  <div class="day-container">
   <span>{{moment(date).format('YYYY-MM-DD h:mm:ss a')}}</span>
  </div>
</template>

<script>
export default {
  name: 'SpecialDay',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.day-container{
    font-size: 25px;
}
</style>
