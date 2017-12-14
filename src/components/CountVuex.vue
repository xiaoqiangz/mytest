<template>
    <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{ $store.state.count }}+ {{ count }}+{{ index }}</h3>
      <hr>
      <p><button @click="add(10)">+</button><button @click="reduce">-</button></p>
    </div>
</template>
<script>
//  import store from '../vuex/index'
//简化写法
import {mapState,mapMutations,mapGetters} from  'vuex'
  export default {
    data(){
      return {
        msg:'hello vuex'
      }
    },
//    methods:{
//      add1:function () {
//        this.$store.commit('add',10)
//      },
//      reduce1:function () {
//        this.$store.commit('reduce')
//      }
//    },
    methods:mapMutations(['add','reduce']),
//    computed: {
//      count(){
//        return this.$store.state.count
//      }
//    }
//    computed:mapState({
//      count:state=>state.count
//    })
    computed:{
      //... es6展开运算符
      ...mapState(['count','index']),
//      count(){
//        return this.$store.getters.count;
//      }
      ...mapGetters(['count'])
    }
  }
</script>
