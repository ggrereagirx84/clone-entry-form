import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '@/router'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    loginUser:[],
    loginError: '',
    registerError: ''
  },
  getters: {
    token(state) {
      return state.token;
    },
    loginUserId(state) {
      return state.loginUser.userID
    },
    isFirstRegister(state) {
      return state.loginUser.isFirstRegister
    },
    motivation(state) {
      return state.loginUser.motivation
    },
    about(state) {
      return state.loginUser.about
    },
    loginUser(state) {
      return state.loginUser
    },
    loginError(state) {
      return state.loginError;
    },
    registerError(state) {
      return state.registerError;
    },
  },
  mutations: {
    createLoginUser(state, data) {
      state.loginUser = data;
    },
    updateToken(state, token) {
      state.token = token;
    },
    updateIsFirstRegister(state, isFirstRegister) {
      state.loginUser.isFirstRegister = isFirstRegister;
    },
    updateMotivation(state, value) {
      state.loginUser.motivation = value;
    },
    updateAbout(state, value) {
      state.loginUser.about = value;
    },
    loginError(state, string) {
      state.loginError = string;
    },
    registerError(state) {
      state.registerError = '既に登録済みのユーザーIDです。';
    },
    toggleEdit(state) {
      state.loginUser.isFirstRegister = 'true';
      localStorage.setItem('isFirstRegister', 'true');
    }
  },
  actions: {
    autoLogin({ commit }) {
      const token = localStorage.getItem('token');
      const isFirstRegister = localStorage.getItem('isFirstRegister');
      if(!token) return;
      commit('updateToken', token);
      commit('updateIsFirstRegister', isFirstRegister);
      this.dispatch('fetchData', token);
    },
    fetchData({ commit }, token) {
      firebase
        .firestore().collection('users').doc(token)
        .get()
        .then(doc => {
          if (doc.exists) {
            commit('createLoginUser', doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch(() => {
          console.log('error4');
        });
    },
    logout({ commit }) {
      commit('updateToken', null);
      localStorage.removeItem('token');
      router.push('/login');
    },
    createUserAccount({ commit }, {userID, password}) {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';

      const string  = letters + letters.toUpperCase() + numbers;

      const len = 16;
      let token ='';

      for (let i = 0; i < len; i++) {
       token += string.charAt(Math.floor(Math.random() * string.length));
      }

      const userData = {
        name: '',
        email: '',
        password: password,
        motivation: '',
        about: '',
        userID: userID,
        token: token,
        isFirstRegister: 'true'
      };
      firebase
        .firestore().collection('users').where('userID', '==', userID)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length > 0) {
            commit('registerError');
          } else {
            firebase
              .firestore().collection('users').doc(token)
              .set(userData)
              .then(() => {
                localStorage.setItem('token', token);
                localStorage.setItem('isFirstRegister', userData.isFirstRegister);
                commit('updateToken', token);
                commit('createLoginUser', userData);
                router.push('/mypage');
                console.log('ok');
              })
              .catch(() => {
                console.log('error5');
              });
          }
        })
        .catch(() => {
          commit('loginError');
        });
    },
    loginUserAccount({ commit }, {userID, password}) {
      firebase
        .firestore().collection('users').where('userID', '==', userID)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.docs.length > 0) {
            querySnapshot.forEach((doc) => {
              if (doc.data().password === password) {
                localStorage.setItem('token', doc.data().token);
                localStorage.setItem('isFirstRegister', doc.data().isFirstRegister);
                commit('updateToken', doc.data().token);
                commit('createLoginUser', doc.data());
                commit('loginError', '');
                router.push('/mypage');
                console.log("OK");
              } else {
                commit('loginError', 'ログインエラー！');
              }
            });
          } else {
            commit('loginError', 'ログインエラー！');
          }
        })
        .catch(() => {
          commit('loginError', 'ログインエラー！');
        });
    },
    registerAbout({ commit, state }) {
      const userData = {
        name: state.loginUser.name,
        email: state.loginUser.email,
        password: state.loginUser.password,
        motivation: state.loginUser.motivation,
        about: state.loginUser.about,
        userID: state.loginUser.userID,
        token: state.loginUser.token,
        isFirstRegister: 'false'
      };
      firebase
        .firestore().collection('users').doc(state.loginUser.token)
        .set(userData)
        .then(() => {
          commit('createLoginUser', userData);
          localStorage.setItem('isFirstRegister', userData.isFirstRegister);
          commit('updateIsFirstRegister', userData.isFirstRegister);
        })
        .catch(() => {
          console.log('error5');
        });
    },
    updateMotivation({commit}, value) {
      commit('updateMotivation', value);
    },
    updateAbout({commit}, value) {
      commit('updateAbout', value);
    },
    toggleEdit({ commit }) {
      commit('toggleEdit');
    }
  }
});