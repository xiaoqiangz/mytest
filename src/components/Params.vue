<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>{{ $route.params.newId }}</p>
    <p>{{ $route.params.newsname }}</p>
  </div>
</template>

<script>
  export default {
    name: 'params',
    data () {
      return {
        msg: 'Welcome to params page'
      }
    },
    beforeRouteEnter: (to, from, next)=> {
      console.log('准备进入路由')
      console.log(to)
      console.log(from)
      if(to.params.newId==888){
        next()
      }else{
        alert("newid 不对")
      }

    },
    beforeRouteLeave:(to,from,next)=>{
      console.log('准备离开路由')
      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
