import Vue from 'vue'
import App from './App.vue'

// Setting up Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Registering the  routes
import {routes} from "./routes";
const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to,from,savePosition){
    return{x:0,y:0};
  }
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
