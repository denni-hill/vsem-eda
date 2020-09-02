<template>
  <search class="header__search" @search="search"/>
</template>

<script>
  import search from '@/components/search.vue';
  export default {
    components:{
      search
    },
    methods:{
      search(wat){
        console.log(wat);
      }
    }
  }
</script>

<style lang="scss">
  .header__search{
    margin-right: 75px;
    .collapsableTextInput{
      &__prepend{
        img{
          width: 25px;
        }
      }
      &__expanded{
        width: 250px;
      }
      height: 40px;
      font-weight: 600;
      input[type=text]{
        font-size: 18px;
      }
    }
  }
</style>
