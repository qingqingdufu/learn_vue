<template>
    <div class="box">
        <!--v-modle:双向绑定，将modle中return的数据渲染到页面视图上，也可以将页面视图上的数据渲染到modle中-->
        <form method="post" action="">
            <!--  for值需与下面关联的id值一致    -->
            <!--v-bind:单向绑定，只能将model中return的数据渲染到页面上-->
            <!--  单向绑定uesrname属性 v-bind:username="username" 或者简写为 :username="" -->
            <p>用户登录</p>
            <label for="username">用户名：</label>
            <input type="text" id="username" placeholder="请输入用户名" v-model="username"><br>
            <label for="password">密&nbsp;&nbsp;&nbsp;码：</label>
            <input type="password" id="password" placeholder="请输入密码" v-model="password"><br>
            <br>
            <input type="button" value="点击提交">
        </form>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "importm",
        data(){
            return{
                username:'',
                password:"",
            }
        },
        created() {
            console.log("实例创建后获取");
            console.log("username为",this.username);
        },
        mounted() {
            console.log("vue实例挂载到DOM树之后");
        },
    }
</script>

<style scoped>
    .box{
        width: 300px;
        height: 100%;
        text-align: center;
        background: #42b983;
        color:white;
        margin: 20px auto ;
        padding: 12px;
    }
    input{
        margin-bottom: 12px;
        font-size: medium;
    }
    label{
        margin-left: 10px;
    }
</style>