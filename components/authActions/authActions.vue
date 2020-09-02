<template>
  <div class="auth-actions">
    <client-only>
      <div class="auth-actions__login" v-if="!isLoggedIn" @click="$eventHub.$emit('openAuthModal')" :key="0">
        <img src="@/static/login.svg" alt="Войти">
        <div>Войти</div>
      </div>
      <div class="auth-actions__user-details" v-else :key="1">
        <img src="@/static/user.svg" alt="Пользователь" class="auth-actions__user-details__toggle-button" @click="toggleUserDetails">
        <user-details__list v-if="showUserDetails" v-on-clickaway="collapseUserDetails">
          <user-details__list__item>
            <template slot="prepend">
              <img src="@/static/user.svg" alt="Личные данные">
            </template>
            Личные данные
          </user-details__list__item>
          <user-details__list__item>
            <template slot="prepend">
              <img src="@/static/deliveryAddresses.svg" alt="Адреса доставки">
            </template>
            Адреса доставки
          </user-details__list__item>
          <user-details__list__item>
            <template slot="prepend">
              <img src="@/static/orders.svg" alt="Предыдущие заказы">
            </template>
            Предыдущие заказы
          </user-details__list__item>
          <user-details__list__item class="log-out-action" @click="logOut">
            <template slot="prepend">
              <img src="@/static/logOut.svg" alt="Выход">
            </template>
            Выход
          </user-details__list__item>
        </user-details__list>
      </div>
    </client-only>
  </div>
</template>

<script>
  import { mixin as clickAway } from "vue-clickaway"
  import userDetails__list from './userDetails__list'
  import userDetails__list__item from './userDetails__list__item';
  export default {
    mixins:[clickAway],
    components:{
      userDetails__list,
      userDetails__list__item
    },
    data(){
      let showUserDetails = false;
      return {
        showUserDetails
      }
    },
    computed: {
      isLoggedIn: function () {
        return this.$store.getters['user/isLoggedIn'];
      }
    },
    methods:{
      toggleUserDetails(){
        this.showUserDetails = !this.showUserDetails;
      },
      collapseUserDetails(){
        this.showUserDetails = false;
      },
      logOut(){
        this.collapseUserDetails();
        this.$store.dispatch('user/logOut');
      }
    }
  }
</script>

<style lang="scss">
  .auth-actions{
    &__login{
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 600;
      font-size: 18px;
      img{
        margin-right: 13px;
      }
    }
    &__user-details{
      &__toggle-button{
        cursor: pointer;
      }
      .log-out-action{
        border-top: solid 1px black;
        border-radius: 0px 0px 10px 10px;
      }
    }
  }
</style>
