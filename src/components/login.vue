<template>
    <div class="box1">
        <div class="box">
            <!--v-bind:单向绑定，只能将model中return的数据渲染到页面视图上-->
    <!--        <form method="post" action="">-->
    <!--            <p>{{message}}</p>-->
    <!--            &lt;!&ndash;  for值需与下面关联的id值一致    &ndash;&gt;-->
    <!--            <lable for ="username">用户名：</lable>-->
    <!--            &lt;!&ndash;  单向绑定uesrname属性 v-bind:username="username" 或者简写为 :username="" &ndash;&gt;-->
    <!--            <input type="text" id="username" placeholder="请输入用户名" :username="username"><br>-->
    <!--            <lable for ="password">密&nbsp;&nbsp;&nbsp;码：</lable>-->
    <!--            <input type="password" id="password" placeholder="请输入密码" :password="password"><br>-->
    <!--            <br>-->
    <!--            <input type="button" value="点击提交">-->
    <!--        </form>-->
            <!--v-modle:双向绑定，将modle中return的数据渲染到页面视图上，也可以将页面视图上的数据渲染到modle中-->
            <form method="post" action="">
                <!--  for值需与下面关联的id值一致    -->
                <p>用户登录</p>
                <label for ="username">用户名：</label>
                <!--v-bind:单向绑定，只能将model中return的数据渲染到页面上-->
                <!--  单向绑定uesrname属性 v-bind:username="username" 或者简写为 :username="" -->
                <input type="text" id="username"
                       placeholder="请输入用户名" v-model="username"><br>
                <label for ="password">密&nbsp;&nbsp;&nbsp;码：</label>
                <input type="password" id="password"
                       placeholder="请输入密码" v-model="password"><br>
                <br>
                <input type="button" value="点击提交">
            </form>
        </div>

<!--        <p>你输入的用户名是：{{username}}</p>-->
<!--        <p>你输入的密&nbsp;&nbsp;&nbsp;码是：{{password}}</p>-->
        <div>
            <ul>
                <li><router-link :to="{name:'importm'}">登录页2</router-link></li>
                <li><router-link :to="{name:'greeting'}">greeting2</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                username:'snow111',
                password:"12345678",
            }
        }
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