<template>
  <modal class="authModal" :displayModal="displayModal" @close="close()">
      <template slot="header">
        <div class="authModal__header">
          Вход в личный кабинет
        </div>
      </template>
    <text-input class="authModal__phone-number" v-model="phoneNumber">Введите номер телефона</text-input>
    <text-input class="authModal__sms" v-model="smsCode" placeholder="Введите код из СМС-сообщения"></text-input>
    <checkbox class="authModal__agreement">Указывая номер телефона, я принимаю условия <router-link to="#">пользовательского соглашения</router-link></checkbox>
    <div class="authModal__login-button" @click="logIn">Войти</div>
    <div class="authModal__sing-up-propose">В первый раз здесь? <router-link class="authModal__sing-up-propose__register-link" to="#">Зарегистрироваться</router-link></div>
  </modal>
</template>

<script>
  import modal from './modal'
  import textInput from './textInput';
  import checkbox from './checkbox'
  export default {
    components:{
      modal,
      textInput
    },
    mounted(){
      this.$eventHub.$on("openAuthModal", this.open);
    },
    beforeDestroy(){
      this.$eventHub.$off("openAuthModal");
    },
    data(){
      let displayModal = false;
      let phoneNumber = "";
      let smsCode = "";

      return {
        displayModal,
        phoneNumber,
        smsCode
      };
    },
    methods:{
      close(){
        this.displayModal = false;
      },
      open(){
        this.displayModal = true;
      },
      logIn(){
        this.$store.dispatch("user/logIn");
        this.close();
      }
    }
  }
</script>

<style lang="scss">
  .authModal{
    color: #979797;
    font-size: 16px;
    a{
      color: #9CCB3B;
    }
    .modal{
      width: 435px;
      height: 510px;
    }
    &__header{
      color: black;
    }
    &__sms{
      margin-top: 52px;
    }
    &__agreement{
      margin-top: 20px;
      a{
        text-decoration: none;
      }
    }
    &__login-button{
      height: 50px;
      background: #9CCB3B;
      border-radius: 10px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 20px;
      margin-top: 20px;
      cursor: pointer;
    }
    &__sing-up-propose{
      margin-top: 20px;
      text-align: center;
      font-weight: 600;
      font-size: 18px;
      &__register-link{
        color: black !important;
        text-decoration: none;
      }
    }
  }
</style>
