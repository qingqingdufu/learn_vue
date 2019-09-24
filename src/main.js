import Vue from 'vue';
import App from './App.vue';

//导入ElementUI插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入子组件：importm
import Importm from "./components/importm";
//创建全局组件
Vue.component('import-moudle', Importm);

//导入vue router对象
import router from "./router/index";
//加载全局插件ElementUI, 需在创建Vue实例之前
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');