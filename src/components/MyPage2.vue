<template>
  <div id="mypage_com" class="cls_c customize">
    <div id="page__all">
      <div id="header__top">
        <div id="header__top__wrap">
					<div class="user__item">
            <span class="username">
              {{ loginUserId }}さんのマイページ
            </span>
            <span 
              class="jsAxolLogout link__logout" 
              @click="logout"
            >
              ログアウト
            </span>
					</div>
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
                  <p>エントリーシート／Applicant Data Sheet</p>
                </div>
              </div>
							<div id="main__contents" class="main__contents">
                <p>
                  下記項目を入力して登録を押してください。<br>
                </p>
                <input name="fb_csrf" value="c_NkzJdLBikq4(DWLDyv4WmfNKGCD-hcF%VGHtmi8iD6SsmEbpPUf)bLs" type="hidden">
                <div class="form__wrap type__memo">
                  <div class="form__item">
                    <div class="form__item__title__wrap">
                      <div class="form__item__title">
                        (1)
                      </div>
                      </div>
                      <div class="form__item__multi">
                        <div class="form__item memo4_line">
                          <!-- <div class="need__item"></div>         -->
                          <div class="form__item__group fb_checkpoint">
                            <div class="form__item__text">
                              応募にあたっての志望動機をご記入ください。
                            </div>
                            <p 
                              class="memo__area" 
                              name="memo4"
                            >{{ loginUserMotivation }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="form__item">
                        <div class="form__item__title__wrap">
                          <div class="form__item__title">
                            (2)
                          </div>
                        </div>
                        <div class="form__item__multi">
                          <div class="form__item memo7_line">
                            <div class="noneed__item"></div>        
                            <div class="form__item__group fb_checkpoint">
                              <div class="form__item__text">
                                自己アピールがあれば、ご記入ください。
                              </div>
                              <p 
                                class="memo__area" 
                                name="memo7"
                              >{{ loginUserAbout }}</p>
                              <div class="check__mark fb_ownAlertStrs"></div>
                              <div class="counter">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div class="form_button">
                      <input 
                        class="btn__l btn__move com__save"
                        name="tempsave" 
                        value="編集する" 
                        type="submit"
                        @click="toggleEdit"
                      >
                    </div><!-- form_button end -->
                  </div>        
                </div>      
              </div>
              <div id="footer__sub">
                <div id="footer__sub__wrap"></div>
              </div>
              <div id="footer">
                <div id="footer__wrap">
                  <div class="copyright">
                    <small class="copyright__text"></small>
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
        about: '',
        motivation: ''
      },
    }
  },
  computed: {
    loginUserId() {
      return this.$store.getters.loginUserId;
    },
    loginUserMotivation() {
      return this.$store.getters.motivation;
    },
    loginUserAbout() {
      return this.$store.getters.about;
    },
  },
  methods: {
    registerAbout() {
      this.$store.dispatch('registerAbout', {
        motivation: this.userAccountData.motivation,
        about: this.userAccountData.about
      });
      this.$router.push('/mypage2');
    },
    toggleEdit() {
      this.$store.dispatch('toggleEdit');
      this.$router.push('/mypage');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

</style>