<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <!--vuex-->
    <!--<router-link to="/count">vuex count</router-link>-->
    <!--路由 router-->
    <router-link to="/">aa</router-link>|
    <!--<router-link to="/params/188/hi ni s zhu ma">bb</router-link>|-->
    <!--<router-link to="/goback">goback</router-link>|-->
    <!--<router-link to="/goparams/888/wo ai yao yao">goparams</router-link>|-->
    <!--<router-link to="/hi1">hi1</router-link>|-->
    <!--<router-link to="/xq">xq</router-link>|-->
    <!--<router-link to="/kkkk">我是瞎BB的</router-link>-->
    <!--&lt;!&ndash;<Error :test="msg"></Error>&lt;!&ndash;公共组件传变量&ndash;&gt;&ndash;&gt;-->
    <!--<p><button @click="go">前进</button><button @click="back">后退</button><button @click="gohome">首页</button></p>-->
    <router-view></router-view>
    <!--<transition name="fade" mode="out-in">-->
       <!--<router-view></router-view>-->
    <!--</transition>-->

    <!--<router-view name="left" class="left"></router-view>-->
    <!--<router-view name="right" class="right"></router-view>-->
    <!--<div>-->
      <!--<router-link to="/">首页</router-link>-->
      <!--<router-link to="/hi">hi页</router-link>-->
      <!--<router-link :to="{name:'hi1',params:{username:'xq',orderid:888}}">hi1页</router-link>-->
      <!--<router-link to="/hi/hi2">hi2页</router-link>-->
    <!--</div>-->

    <!--<p>{{ $route.name }}</p>-->

  </div>
</template>

<script>
  import Error from '@/components/Error'
export default {
  name: 'app',
  methods:{
    go:function () {
       this.$router.go(1)
      //Error.medthods.add();
      console.log(Error)
      this.msg = "哈哈 我是xq"
    },
    back:function () {
      this.$router.go(-1)
    },
    gohome:function () {
      //this.$router.push('/')
      //this.$router.push({path:'/'})
      this.$router.push({name:'Params',params:{newId:888,newsname:'xq ai yao yao'}})
    }
  },
  components:{//注册组件
    Error
  },
  mounted:function () {
//    console.log(Error)
//    Error.medthods.add();
  },
  data(){
    return {
      msg : 'iam xq'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}

/*@import url(assets/index.css);*/
</style>
