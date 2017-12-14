<template>
   <div>
     <h2>{{ msg }}</h2>
     <!--<h3>{{$route.params.username}}-&#45;&#45;{{$route.params.orderid}}</h3>-->
   </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Welcome to hi1 page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
