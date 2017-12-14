<template>
   <div>
     <h2>{{ msg }}</h2>
     <p><button @click="jump">jump</button></p>
     <router-view></router-view>
   </div>
</template>

<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Welcome to xq page'
      }
    },
    methods:{
      jump:function () {
        this.$router.push({name:'hi1',params:{username:'yao',orderid:777}})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
