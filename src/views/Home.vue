<template>
    <div ref="home" class="home">
        <topNav></topNav>
        <div class="main" @contextmenu.prevent="rightClick(454)">
            <leftNav v-bind="ddq"></leftNav>
            <div class="content-main">
                <div class="top">ddd</div>
                <el-input v-model="inputValue"></el-input>
                {{inputValue1}}
                <div>
                    <!-- <div class="neirong"></div> -->
                    <router-view></router-view>
                </div>
            </div>
            <div class="content-main1">

            </div>

        </div>
    </div>
</template>

<script>
import topNav from './topnav.vue'
import leftNav from './leftNav.vue'
export default {
    name: "Home",
    components:{
        topNav,
        leftNav,
    },
    data() {
        return {
            // inputValue:'',s
            inputValue11:'',
            ddq:{
                aac:"dadasdad"
            },
            rules: [
                {
                    taskid: "c2d86074241943328935f25818745379",
                    opentime: "16:04",
                    closetime: "08:07",
                    weeks: [1, 2],
                    temp: 19
                }, {
                    taskid: "82f132866b9e4fe7b74fc38bf0f6ad7b",
                    opentime: "05:07",
                    closetime: "07:08",
                    weeks: [3],
                    temp: 10
                }, {
                    taskid: "da3d81e357034819bd2478bc3aee8256",
                    opentime: "07:23",
                    closetime: "02:05",
                    weeks: [6],
                    temp: 10
                }, {
                    taskid: "bee6540d602647809e607a2d9a9e28da",
                    opentime: "01:01",
                    closetime: "20:02",
                    weeks: [7],
                    temp: 10
                }
            ],
            aad:[
                {
                    id: 1,
                    weeks: 5
                },
                {
                    id: 2,
                    weeks: 6
                },
                {
                    id: 3,
                    weeks: 7
                },
            ]
        };
    },
    computed: {
        inputValue1:function(val){
            console.log(val);
            return this.inputValue * 2
        },
        inputValue:{
            get(){
                return this.inputValue11 || ""
            },
            set(val){
                this.inputValue11 = val
                return val
            }
        }
    },
    watch: {
    },
    mounted() {
        this.rules.find(item=>{
            if (item.weeks.indexOf(3) !== -1) {
                console.log(item.opentime);
            }
        })
        this.aad.map(item=>{ return item.id === 2})
        console.log(this.aad.map(item=>{ 
            if(item.id === 2){
                return item
            }
        }));
    },
    methods: {
        rightClick(e,a){
            console.log(e);
            console.log(a);
        }
    },
};
</script>
<style lang="less" scoped>
.home {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
        display: flex;
        overflow: hidden;
        border: 10px solid red;
        position: relative;
        .content-main{
            border: 10px solid yellow;
        }
        .content-main1{
            width: 200px;
            height: 200px;
            border: 1px solid blue;
        }
        .neirong{
            box-sizing: border-box;
            width: 500px;
            height: 500px;
        }
    }
}
</style>