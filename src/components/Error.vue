<template>
  <div class="hello">
    <h1>{{ msg }}{{ test }}</h1>
    <p><router-link to="/">回到首页</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '404 很抱歉 页面没找到'
      }
    },
    props:['test'],
    medthods:{
      add:function () {
         alert("111")
      }
    }
//    ,
//    components:{
//      Error
//    }
  }
</script>

