<template>
  <address-selector :addresses="addresses" class="header__addressSelector"/>
</template>

<script>
  import addressSelector from '@/components/addressSelector.vue';
  export default {
    components:{
      addressSelector
    },
    data(){ //or asyncData if required ssr
      const addresses = [
        {
          displayName : "ул. Петровско-Разумовская 17"
        },
        {
          displayName : "ул. Сибирский проезд 10, к.2"
        },
        {
          displayName : "ул. Перервинский бульвар 27, к.1"
        }
      ];

      return {
        addresses
      };
    }
  }
</script>

<style lang="scss">
.header__addressSelector{
  margin-left: 144px;
  width: 450px;
  .collapsableTextInput{
    height: 40px;
    font-weight: 600;
    input[type=text]{
      font-size: 18px;
    }
  }
}
</style>
