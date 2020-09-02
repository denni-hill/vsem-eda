<template>
  <div class="address-selector">
    <collapsable-text-input placeholder="Введите адрес доставки" :value="inputText" @input="inputText = $event.target.value" @focusChanged="displayHelper = $event">
      <template slot="prepend">
        <img src="@/static/location.svg" alt="Адрес">
      </template>
    </collapsable-text-input>
    <input-helper :hints="addresses.map(address => address.displayName)" :hintsLimit="2" :search="inputText" v-if="displayHelper" @itemSelected="addressSelected">
      <template slot="prepend">
        <div class="input-helper__item__prepend-circle">
          <img src="@/static/location.svg" alt="Адрес">
        </div>
      </template>
    </input-helper>
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
    props:{
      addresses:{
        type: Array,
        required: true
      }
    },
    data(){
      let inputText = "ул. Петровско-Разумовская 17";
      let displayHelper = false;

      return {
        inputText,
        displayHelper
      }
    },
    methods:{
      addressSelected(addressDisplayName){
        this.inputText = addressDisplayName;
        this.$emit('addressSelected', this.addresses.find(address => address.displayName === addressDisplayName));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address-selector{
    font-weight: 600;
    font-size: 18px;
    .input-helper{
      color: #979797;
      font-weight: 600;
      font-size: 16px;
    }

    .input-helper__item__prepend-circle{
      display: flex;
      align-items: center;
      border-radius: 24px;
      width: 24px;
      height: 24px;
      justify-content: center;
      background: #EEEEEE;
      img{
        height: 18px;
        width: 14px;
      }
    }
  }
</style>
