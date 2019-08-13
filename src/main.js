import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import axios from "./axios"//在main中引入axios.js
import ElementUI from 'element-ui'
import Vuex from "vuex"
import 'element-ui/lib/theme-chalk/index.css'
import '../src/font/iconfont.css'
import '../node_modules/normalize.css'
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false


var store=new Vuex.Store({
  state:{
    active:"none",
    informations:"",
    isLogin:false,
    uname:'',
  },
  mutations:{
    loginshow(state){
      //点击显示登录框
      state.active="block";
    },
    perinfor(state){
      state.isLogin=localStorage.getItem("login");
      // state.uname=localStorage.getItem("uname");
      // console.log(localStorage.getItem("login"));
      // if(typeof state.informations=="object"){
      //   state.isLogin=true;
        
      // };
  }, 

  },
  getter:{

  },
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
