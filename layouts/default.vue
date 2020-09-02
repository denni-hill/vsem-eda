<template>
  <div class="default-layout-wrapper">
    <div class="default-layout__header container">
      <Header />
    </div>
    <div class="default-layout__content">
      <auth-modal />
      <NavBar />
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style>
</style>
<script>
  import Header from "./default/header/header";
  import NavBar from "./default/navBar/navBar";
  import authModal from "../components/authModal";
  export default {
    components: {
      Header,
      NavBar,
      authModal
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: ProximaNova;
    src: url("~static/proximaNovaFont/ProximaNova-Regular.otf") format("opentype");
  }

  body{
    font-family: ProximaNova;
    margin: 0;
  }

  .container {
    display: flex;
    margin: 0 auto;
  }

  @media screen and (max-width: 1599px) {

  }

  @media screen and (min-width: 1600px) {
    .container{
      max-width: 1400px;
    }
  }
</style>
