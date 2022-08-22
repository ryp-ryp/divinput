<template>
    <div>
        这是About页面
        <el-button @click="tuichu">退出登录</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        tuichu(){
            this.$router.push("/login")
            localStorage.removeItem('assToken')
        }
    },
};
</script>

<style>
</style>