<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <draggable v-model="list" @update="datadragEnd" :move="getdata" @end="onEnd">
       <div v-for="item in list" :key="item.id" class="bg">
            {{item.name}}
       </div>
    </draggable>
    <!--<div class="point">-->
      <!--&lt;!&ndash;<v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>&ndash;&gt;-->
      <!--&lt;!&ndash;<v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>&ndash;&gt;-->
      <!--<div class="main item four active" id="myChart" :style="{width:'800px' , height:'300px'}">-->

      <!--</div>-->
    <!--</div>-->
    <div class="echarts">
      <IEcharts :option="option" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
      <button @click="doRandom">Random</button>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  //import echarts from 'echarts';
  import IEcharts from 'vue-echarts-v3';
  import outils from  'outils'
  let list = [{name:'haha',id:1},{name:'xixi',id:2},{name:'gaga',id:3},{name:'hehe',id:4}]
//  var option = {
//    title: {
//      text: 'ECharts 入门示例'
//    },
//    tooltip: {},
//    legend: {
//      data:['销量']
//    },
//    xAxis: {
//      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//    },
//    yAxis: {},
//    series: [{
//      name: '销量',
//      type: 'line',
//      data: [5, 20, 36, 10, 10, 20]
//    }]
//  };
  var option = {

//    title: {      //标题组件
//
//      text: '折线图堆叠'
//
//    },

    tooltip: {    //提示框组件

      trigger: 'axis'

    },
    color:['#EEEE00','#FF34B3'],
    legend: {     //图例组件

      //data: ['订单数量', '订单金额', '视频广告', '直接访问', '搜索引擎']
      data: ['订单数量', '订单金额']

    },

    grid: {       //直角坐标系内绘图网格

      left: '3%',

      right: '4%',

      bottom: '3%',

      containLabel: true

    },

    xAxis: {       //直角坐标系 grid 中的 x 轴

      type: 'category',

      boundaryGap: true,

      data: ['2017-10-23', '2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27', '2017-10-28', '2017-10-29']

    },

    yAxis: {       //直角坐标系 grid 中的 y 轴

      type: 'value'

    },

    series: [      //系列列表

      {

        name: '订单数量',

        type: 'line',

        stack: '总量',

        data: [120, 132, 101, 134, 90, 230, 210]
//        itemStyle:{
//          normal:{
//            lineStyle: {
//              color: '#EEEE00'
//            },
//            borderColor:'#EEEE00',
//            barBorderColor:'#EEEE00',
//            borderWidth:2
//          }
//        }


      },

      {

        name: '订单金额',

        type: 'line',

        stack: '总量',

        data: [220, 182, 191, 234, 290, 330, 1000]

      }
//      {
//
//        name: '视频广告',
//
//        type: 'line',
//
//        stack: '总量',
//
//        data: [150, 232, 201, 154, 190, 330, 410]
//
//      },
//
//      {
//
//        name: '直接访问',
//
//        type: 'line',
//
//        stack: '总量',
//
//        data: [320, 332, 301, 334, 390, 330, 320]
//
//      },
//
//      {
//
//        name: '搜索引擎',
//
//        type: 'line',
//
//        stack: '总量',
//
//        data: [820, 932, 901, 934, 1290, 1330, 10000]
//
//      }

    ]

  };
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:list,
      option:option,
      loading:false
    }
  },
  components:{
    draggable,
    IEcharts
  },
  methods:{
    datadragEnd:function (evt) {
      console.log(evt)
      console.log('拖动前的索引：'+evt.oldIndex);
      console.log('拖动后的索引：'+evt.newIndex);
    },
    getdata:function (evt) {
      console.log("开始拖动----"+evt.draggedContext.element.id);
    },
    onEnd:function (evt) {

    },
    doRandom() {
      const that = this;
      let data = [];
      for (let i = 0, min = 5, max = 99; i < 6; i++) {
        data.push(Math.floor(Math.random() * (max + 1 - min) + min));
      }
      that.loading = !that.loading;
      that.option.series[0].data = data;
    },
    onReady(instance) {
      console.log(instance);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  },
  mounted(){
    //let myChart = echarts.init(document.getElementById('myChart'))
//    let myChart = echarts.init(document.querySelector('.point .main'))
//    myChart.setOption(option);
  },
  created(){
    console.log(outils.isPhoneNum('13456763386'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.bg{
  background-color: #0074D9;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 5px;
}
.echarts {
  width: 600px;
  height: 400px;
}
</style>
