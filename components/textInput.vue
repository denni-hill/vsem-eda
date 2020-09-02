<template>
  <div class="text-input">
    <p class="text-input__header">
      <slot></slot>
    </p>
    <input type="text" @input="$emit('input', $event.target.value)" :value="value" class="text-input__input" :placeholder="placeholder" />
  </div>
</template>

<script>
  export default {
    props:{
      value:String,
      placeholder:String
    }
  }
</script>

<style scoped lang="scss">
  .text-input{
    &__header{
      font-weight: 600;
      font-size: 16px;
      color: #979797;
      margin: 0;
      padding: 0;
    }
    &__input{
      border: none;
      outline: none;
      background: #F7F7F7;
      border-radius: 10px;
      font-weight: 600;
      font-size: 18px;
      height: 41px;
      margin: 20px 0 0 0;
      padding-left: 15px;
      box-sizing: border-box;
      width: 100%;
      &::placeholder{
        color: #979797;
      }
    }
  }
</style>
