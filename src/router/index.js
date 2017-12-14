import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/CountVuex'

Vue.use(Router)
//子路由
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     },
//     {
//       path: '/hi',
//       component: Hi,
//       children:[
//         {path:'/',name: 'Hi',component:Hi},
//         {path:'hi1',name: 'hi1',component:Hi1},
//         {path:'hi2',name: 'hi2',component:Hi2},
//       ]
//     }
//   ]
// })
//单页面多模块
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       components: {
//           default:HelloWorld,
//           left:Hi1,
//           right:Hi2
//       }
//     }
//   ]
// })
export default new Router({
  mode:'history', //hash history
  routes: [
    {
      path: '/',
      name:'hello',
      component: HelloWorld
    },
    {
      path: '/params/:newId/:newsname',
      name: 'Params',
      component: Params
    }
    ,
    {
      path:'/goback',
      redirect:'/'
    },
    {
      path:'/goparams/:newId/:newsname',
      redirect:'/params/:newId/:newsname'
    },
    {
      path:'/hi1',
      component:Hi1
    },
    {
      path:'/xq',
      component:Hi1,
      alias:'/hi1'
    },
    {
      path:'*',
      component:Error
    },
    {
      path:'/count',
      component:Count
    }
  ]
})
