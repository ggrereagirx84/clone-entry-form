import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyDPa-d9xtaknbdp4XU_n1-p7ZNo77haD5A",
  authDomain: "clone-entry-form-a5765.firebaseapp.com",
  projectId: "clone-entry-form-a5765",
  storageBucket: "clone-entry-form-a5765.appspot.com",
  messagingSenderId: "619188781623",
  appId: "1:619188781623:web:4cf9f7d83a9216149675b2"
};

firebase.initializeApp(firebaseConfig);

store.dispatch('autoLogin');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
