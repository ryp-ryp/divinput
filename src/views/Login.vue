<template>
  <div>
      <el-input v-model="zhanghao"></el-input>
      <el-input v-model="mima"></el-input>
      <el-button @click="denglu">登录</el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            zhanghao:"",
            mima:''
        }
    },
    methods: {
        denglu(){
            if(this.zhanghao === 'admin' && this.mima === '123456'){
                localStorage.setItem("assToken","Token123456")
                this.$router.push(this.$route.query.redirect)
            }else{
                this.$message({
                    message: '账号密码错误',
                    type: 'error'
                });
            }
        }
    },

}
</script>

<style>

</style>