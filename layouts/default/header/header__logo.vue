<template>
  <div>
    <Logo class="header__logo" />
  </div>
</template>

<script>
  import Logo from '@/components/logo';
  export default {
    components:{
      Logo
    }
  }
</script>

<style lang="scss">
  .header__logo{
    height: 39px;
    width: auto;
    img{
      height: 39px;
    }
  }
</style>
