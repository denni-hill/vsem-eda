<template>
  <div class="auth-actions">
    <div class="auth-actions__login" v-if="!isLoggedIn" @click="$eventHub.$emit('openAuthModal')">
      <img src="@/static/login.svg" alt="Войти">
      Войти
    </div>
    <div class="auth-actions__user-details" v-else>
      <img src="@/static/user.svg" alt="Пользователь" class="auth-actions__user-details__toggle-button">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoggedIn: function () {
        return this.$store.getters['user/isLoggedIn'];
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
    }
  }
</style>
