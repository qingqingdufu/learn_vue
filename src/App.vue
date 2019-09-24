<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--在父组件中给子组件传值 -->
<!--    <HelloWorld msg="Welcome to Your vue.js App"/>-->
<!--    <greeting :message="message"/>-->
<!--    <login></login>-->
<!--    <elementUI/>-->
<!--      导入组件id：import-moudle, 在main.js中设为全局组件后，不用在script中import和声明-->
<!--    <import-moudle/>-->
<!--      router-link 导航-->
  <ul>
<!--      to属性默认为path路径to="/",也可以取路由路径的name属性值-->
<!--      <li><router-link to="/">主页</router-link></li>-->
      <li><router-link :to="{name:'home'}">主页</router-link></li>
      <li><router-link :to="{name:'greeting',params:{username:'snow'}}">greeting页</router-link></li>
      <li><router-link to="/login">登录页</router-link></li>
      <li><router-link to="/elementUI">elementUI表格页</router-link></li>
  </ul>
<!--      展示路由的页面内容-->
    <router-view></router-view>
  </div>
</template>

<script>
//导入子组件
// import HelloWorld from './components/HelloWorld.vue'
// import greeting from "./components/greeting";
// import login from "./components/login";
// import elementUI from "./components/elementUI";

export default {
  name: 'app',
  components: {
        // greeting,
        // HelloWorld,
        // login,
        // elementUI,
  },
  data(){return{message: 1234567890,title:890}},
  methods:{
    },
}</script>

<style>
    ul{
        margin: auto;
        height: 20px;
        padding: 6px;
        background: aquamarine;
    }
    li{
        list-style-type: none;
        float: left;
        width: 20%;
        text-align: center;
        margin: auto;
    }
    a{
    text-decoration:none;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
   /*background-image: url("./assets/tim.png") ;*/
   background-repeat: no-repeat;
    height: 100%;
    background: blanchedalmond;
}
</style>
