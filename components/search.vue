<template>
  <div>
    <collapsable-text-input placeholder="Поиск" :value="inputText" @input="inputText = $event.target.value" @focusChanged="isFocused = $event" @enterPressed="$emit('search', inputText)" :holdOnNotEmpty="true" class="search">
      <template slot="prepend">
        <img src="@/static/search.svg" alt="Поиск" @click="searchButtonClick">
      </template>
      <template slot="collapsed">
        Поиск
      </template>
    </collapsable-text-input>
  </div>
</template>

<script>
  import collapsableTextInput from "./collapsableTextInput";
  import inputHelper from "./inputHelper";
  export default {
    components: {
      collapsableTextInput,
      inputHelper
    },
    data(){
      let inputText = "";
      let isFocused = false;

      return {
        inputText,
        isFocused
      }
    },
    methods:{
      searchButtonClick(){
        if(this.isFocused)
          this.$emit('search', this.inputText);
      }
    }
  }
</script>

<style>
  .search{
    font-weight: 600;
    font-size: 18px;
  }
</style>
