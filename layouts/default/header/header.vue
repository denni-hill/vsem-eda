<template>
  <div class="header">
    <div class="header__left">
      <header__logo />
      <header__address-selector />
    </div>
    <div class="header__right">
      <header__search />
      <header__auth-actions />
      <header__cart-button />
    </div>
  </div>
</template>

<script>
  import header__logo from './header__logo';
  import header__addressSelector from './header__addressSelector';
  import header__search from './header__search'
  import header__authActions from './header__authActions';
  import header__cartButton from './header__cartButton';
  export default {
    components:{
      header__logo,
      header__addressSelector,
      header__search,
      header__authActions,
      header__cartButton
    }
  }
</script>

<style lang="scss">
  .header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 89px;
    width: 100%;

    &__right, &__left{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
</style>
