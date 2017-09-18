<template>
  <div class="hello">
    <div class="title">产品详情</div>
    <div>产品id：{{$route.params.id}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ProductList',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    color: #f00;
  }
</style>
