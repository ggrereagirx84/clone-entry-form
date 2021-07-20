import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import Login from './components/Login';
import SineUp from './components/SineUp';
import MyPage from './components/MyPage';
import MyPage2 from './components/MyPage2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: SineUp,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/mypage',
      component: MyPage,
      beforeEnter(to, from, next) {
        if(store.getters.token) {
          if(store.getters.isFirstRegister == 'true') {
            next();
          } else {
            next('/mypage2');
          }
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/mypage2',
      component: MyPage2,
    }
  ]
});