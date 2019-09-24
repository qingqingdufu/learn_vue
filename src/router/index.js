//安装并导入
import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

//2.导入组件
import greeting from "../components/greeting";
import login from "../components/login";
import HelloWorld from "../components/HelloWorld";
import elementUI from "../components/elementUI";
import importm from "../components/importm";

// // 2. Define route components 定义组件
// const Home = { template: '<div>home</div>' };
// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };
// const Unicode = { template: '<div>unicode</div>' };

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    // base: __dirname,
    routes: [
        //一个对象代表一条路由
        { path: '/', component: HelloWorld,name:"home" },
        //在组件中可以通过this.$router.query来获取查询字符串参数.。路径参数username
        // { path: '/greeting/:username', component: greeting ,name:"greeting"},
        { path: '/greeting:username', component: greeting ,name:"greeting"},
        { path: '/login',
            component: login ,
            name:"login",
            children:[
                //空路径会指向默认组件, 页面渲染顺序 parent:Root-->parent-->default
                //查找目标为父路由，会加载所属全部子路由。查找目标为子路由，先渲染父路由；
                { path: '', component: HelloWorld ,name:"default"},
                { path: '/login/importm', component: importm ,name:"importm"},
                { path: '/login/greeting', component: greeting ,name:"greeting"},

            ]},
        { path: '/elementUI', component: elementUI ,name:"ele"}
    ]
});

//4. 导出路由
export default router;


