import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
   state:{
     count:2,
     index:3
   },
  mutations:{
     add:function (state,n) {
        state.count+=n;
        state.index+=n;
       },
      reduce:function (state) {
        state.count--;
        state.index--;
      }
  },
  //在获取数据之前进行的一种再编辑,相当于对数据的一个过滤和加工
  getters:{
    count:function (state) {
       return state.count+=100
    }
  }
})

