<template>
  <div id="mypage_login" class="cls_c customize">
    <div id="page__all">
      <div id="header__top">
        <div id="header__top__wrap">
          <div class="user__item"></div>
        </div>
      </div>
      <div id="header__main">
        <div class="header__main__contents"></div>
      </div>
      <div id="header__sub">
        <div id="header__sub__wrap"></div>
      </div>

      <div id="menu__contents__wrap">
        <div id="contents__wrap">
          <div id="menu__area">
            <div id="menu__wrap">
              <ul id="menu">
                <!-- <li class="menu__button menu__now menu__login menu__cnt__1" id="menu__login">
                  <a href="">ログイン</a>
                </li>
                <li class="menu__button menu__browser menu__cnt__2" id="menu__browser">
                  <a href="">利用環境について</a>
                </li> -->
              </ul>											
            </div>			
          </div>
          <div id="contents__area">
            <div id="contents__area__wrap">
              <div id="contents__top__img__wrap">
                <div id="contents__top__img"></div>
              </div>
              <div id="contents__title__wrap">
                <div id="contents__title">
                  <p>ログイン</p>
                  <span id="login_info" class="login__info"></span>
                </div>
              </div>
              <div id="main__contents" class="main__contents">
              
                <div class="login__message__wrap">
                  <div id="login__message">サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル、サンプル<br /><br />
                  sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample. sample
                  </div>
                </div>
                <div id="login_box" class="login_box_with_kiyaku login_upper_no_news"></div>
                <div id="login__box__contents">
                  <input name="fb_csrf" value="v_+CMJb+fwf3+SYHg9%x9xmch_)5LTiE7zk7(EqNwpv94)-YY9cgFpQgz" type="hidden"/>
                  <div id="login_main" class="normal">
                    <div id="origin_login_box">
                      <div id="origin_login" class="input__box fb_checkpoint">
                        <div class="login__title">オリジナルID･パスワードでログイン</div>
                        <div class="login__id-pass__wrap">
                          <div class="origin_id">
                            <div class="id__label">ID番号／System ID</div>
                            <div class="origin__id">
                              <input 
                                style="ime-mode:disabled;" 
                                type="text" name="id" 
                                value=""
                                v-model="userAccountData.userID"
                              >
                            </div>
                          </div>
                          <div class="origin_pass">
                            <div class="pass__label">パスワード／Password</div>
                            <div class="origin__pass">
                              <input 
                                type="password" 
                                name="password" 
                                value=""
                                v-model="userAccountData.password"
                              >
                            </div>
                          </div>
                        </div>
                        <div class="check__mark fb_ownAlertStrs" style="display:none;"></div>
                        <div class="loginError">{{ loginError }}</div>
                        <div class="login__button">
                          <input 
                            class="btn__l btn__submit next__arrow" 
                            name="submit" 
                            value="ログイン" 
                            type="submit"
                            @click="loginUserAccount"
                          >
                        </div>
                        <div class="switchText">エントリーがまだの方は
                          <div
                            class="switch"
                            @click="toSineUp"
                          >こちら</div>
                          から
                        </div>
                      </div>
                    </div>
                    <div id="other_login"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccountData: {
        userID:'',
        password: '',
      },
    }
  },
  computed: {
    loginError() {
      return this.$store.getters.loginError;
    }
  },
  methods: {
    loginUserAccount() {
      this.$store.dispatch('loginUserAccount', {
        userID: this.userAccountData.userID,
        password: this.userAccountData.password
      });
    },
    toSineUp() {
      this.$router.push('/');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn__s.btn__submit, .btn__l.btn__submit {
    background-color: #ed4e3b;
    color: #fff;
    border-bottom: 3px solid #e02a15;
}
.switchText {
  margin-top: 20px;
  display: flex;
}
.switch {
  color: blue;
  cursor: pointer;
}
.switch:hover {
  opacity: .9;
}
.loginError {
  height: 20px;
  color: red;
}

</style>
