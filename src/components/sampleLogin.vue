<template>
  <div class="hello">
    <h1>ログイン画面</h1>
    <div>
      <fieldset>
        <label>
          メールアドレス
          <input 
            type="text" 
            placeholder="E-mail" 
            v-model="userAccountData.mailAddress" 
          >
        </label>
        <label>
          パスワード
          <input 
            type="text" 
            placeholder="Password" 
            v-model="userAccountData.password" 
          >
        </label>
      </fieldset>
      <div id="loginError">{{ loginError }}</div>
    </div>

    <div 
      class="button" 
      @click="loginUserAccount"
    >
      ログイン
    </div>
    <div 
      class="swich"
      @click="toSineUp"
    >
      新規登録はこちらから
    </div>

    <footer>
      <p>Copyright ©2019 ○○ Inc. All rights reserved</p>
      <div>gifts.com</div>
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccountData: {
        mailAddress: '',
        userID:'',
        password: '',
      },
    };
  },
  computed: {
    loginError() {
      return this.$store.getters.loginError;
    }
  },
  methods: {
    loginUserAccount() {
      this.$store.dispatch('loginUserAccount',  {
        email: this.userAccountData.mailAddress,
        password: this.userAccountData.password
      });
      this.userAccountData.mailAddress = '';
      this.userAccountData.password = '';
    },
    toSineUp() {
      this.$router.push('/');
    },
  }
}
</script>

<style scoped>
fieldset {
  width: 500px;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: auto;
}

label {
  width: 300px;
  margin: auto;
}

.button {
  border: solid 2px rgb(84, 183, 223);
  width: 100px;
  height: 50px;
  border-radius: 5px;
  margin: 20px auto 0;
  line-height: 50px;
  color: rgb(84, 183, 223);
  cursor: pointer;
}

.button:hover {
  color: #fff;
  background: rgb(84, 183, 223);
}

.swich {
  display: inline-block;
  color: rgb(84, 183, 223);
  cursor: pointer;
}
.swich:hover {
  text-decoration: underline rgb(84, 183, 223);
}
footer > p {
  margin-top: 60px;
}
footer > div {
  margin: 100px 0 0 auto;
  background: #bbb;
  width: 70px;
  height: 20px;
  border-radius: 5px;
  color: #fff;
}

#loginError {
  color: red;
}
</style>
