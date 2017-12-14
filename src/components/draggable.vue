<template>
    <draggable v-model="list" @update="datadragEnd" :move="getdata" @end="onEnd">
        <!--<el-table-->
                <!--:data="list"-->
                <!--style="width: 100%">-->
            <!--<el-table-column-->
                    <!--prop="date"-->
                    <!--label="姓名"-->
                    <!--width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="name"-->
                    <!--label="姓名"-->
                    <!--width="180">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
                    <!--prop="id"-->
                    <!--label="id">-->
            <!--</el-table-column>-->
        <!--</el-table>-->
        <!--<div v-for="item in list" class="bg">{{item.name}}</div>-->
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark" v-for="item in list">{{item.name}}</div></el-col>
        </el-row>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        components: { draggable },
        data() {
            return {
                list:[
                    {name:'我是111',id:1,date:'2017-11-9'},
                    {name:'我是222',id:2,date:'2017-11-9'},
                    {name:'我是333',id:3,date:'2017-11-9'},
                    {name:'我是444',id:4,date:'2017-11-9'},
                    {name:'我是555',id:5,date:'2017-11-9'}
                ]
            };
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

            }
        }
    };
</script>

<style lang="scss" scoped>
    .wrapper-cropper{
        width: 100%;
        height: 500px;
    }
    .wrapper-btn{
        padding-top: 10px;
    }
    .bg{
        width: 100%;
        height: 20px;
        background-color: #00a394;
        margin-bottom: 10px;
        text-align: center;
    }
</style>