<template>
  <div class="left-nav">
      <button @click="routeJump">跳转</button>
      <iframe :src="srcUrl" frameborder="0"></iframe>
      <a @click="zhuanfa">222222222</a>
      <!-- <a href="http://10.2.2.14:8080/job/tools-test20220307/job/transfer_to_production_test20220307/34/console">222222222</a> -->
  </div>
</template>

<script>
export default {
    name:'leftNav',
    props:['aac'],
    data() {
        return {
            srchtml:'',
            srcUrl:''
        }
    },
    methods: {
        routeJump(){
            this.$router.push({name:'A'})
        },
        numTransformDate(val){
            let arrWeek = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
            let newWeekArr = '';
            val.forEach(item => {
                if(newWeekArr){
                    newWeekArr = newWeekArr + ',' + arrWeek[item-1]
                }else{
                    newWeekArr = arrWeek[item-1]
                }
            });
        },
        zhuanfa(){
            console.log(1111);
            setTimeout(() => {
                window.location.href="http://10.2.2.14:8080/j_acegi_security_check?j_username=tangshihao&j_password=Pass@word78&redirectUrl=http://10.2.2.14:8080/job/tools-test20220307/job/transfer_to_production_test20220307/34/console"
                setTimeout(() => {
                    // window.location.href="http://10.2.2.14:8080/job/tools-test20220307/job/transfer_to_production_test20220307/34/console"
                }, 500);
                // this.$router.push({path:'/j_acegi_security_check?j_username=tangshihao&j_password=Pass@word78',meta:{redirectUrl:'1'}})
            }, 2000);
                console.log(this.$route.query.redirectUrl);
           
        }
    },
    mounted() {
        this.$bus.$emit('huishuan','shigecoushabi')
        // this.srcUrl = 'http://10.2.2.14:8080/j_acegi_security_check?j_username=tangshihao&j_password=Pass@word78&redirectUrl=1'
        // console.log(this.aac);
        // console.log('/api/j_acegi_security_check?j_username=tangshihao&j_password=Pass@word78');
        // let thatData = [1, 3, 5];
        // let arrData = [1,2,3,4,5,6,7]
        // let arrWeek = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
        // let newWeekArr = [];
        // thatData.forEach(item => {
        //     newWeekArr.push(arrWeek[arrData.indexOf(item)])
        // });
        // console.log(newWeekArr);
        // setTimeout(function () {
        //     console.log('setTimeout');
        // }, 0)

        // Promise.resolve()
        //     .then(function () {
        //     console.log('promise1');
        //     setTimeout(function () {
        //     console.log('setTimeout1');
        // }, 0)
        //     })
        //     .then(function () {
        //         console.log('promise2');
        //     })
        // for (let index = 3; index <= 10; index++) {
        //     setTimeout(() => {
        //         console.log(index);
        //     }, 500);
        //     // console.log(index);
        // }

        // function sum() {
        //     var a = 0;
        //     return function () {
        //        a= a+3
        //        console.log(a); 
        //     }
            
        // }

        // var fun = sum()
        // console.log(fun);
        // fun();
        // fun()

        // var arr = []
        // for (var index = 0; index < 6; index++) {
        //     arr.push(function(){
        //         return index
        //     })
        // }
        // console.log(arr);
        // arr.forEach((item) => { console.log(item); })
    },
}
</script>
<style lang="less" scoped>
.left-nav{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>