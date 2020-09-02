<template>
  <div class="collapsableTextInput" :class="{expanded: !isCollapsed}" v-on-clickaway="unFocus">
    <div class="collapsableTextInput__prepend" @click="focus">
      <slot name="prepend"></slot>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="!isCollapsed" class="collapsableTextInput__expanded" :key="1">
        <input type="text" :placeholder="placeholder" :value="value" @input="$emit('input', $event)" @keyup.enter="$emit('enterPressed')">
        <slot name="append">
          <div class="collapsableTextInput__expanded__append" @click="clear">
            <img src="@/static/cross.svg" alt="Отмена">
          </div>
        </slot>
      </div>
      <div v-else :key="2" @click="focus" class="collapsableTextInput__collapsed">
        <slot name="collapsed">{{value}}</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mixin as clickAway } from "vue-clickaway"
  export default {
    mixins:[clickAway],
    props:{
      value: {
        type: String,
        required: true
      },
      placeholder: String,
      holdOnNotEmpty: Boolean
    },
    data(){
      let isFocused = false;
      return {
        isFocused
      }
    },
    computed:{
      isCollapsed: function () {
        return !((this.holdOnNotEmpty && this.value.length > 0) || this.isFocused);
      }
    },
    methods:{
      focus(){
        this.isFocused = true;
        this.$emit("focusChanged", this.isFocused);
      },
      unFocus(){
        this.isFocused = false;
        this.$emit("focusChanged", this.isFocused);
      },
      clear(){
        this.unFocus();
        this.$emit('input', {target: {value: ""}});
      }
    }
  }
</script>

<style lang="scss">
  .collapsableTextInput{
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    transition: .2s ease-in;
    &.expanded{
      background: #F5F5F5;
    }
    &__prepend{
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      padding: 0 15px;
      img{
        height: 28px;
      }
    }
    &__expanded{
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-grow: 1;
      input[type=text]{
        width: 100%;
        height: 24px;
        background: transparent;
        outline: none;
        border: none;
        border-right: solid 1px #C4C4C4;
        padding-right: 18px;
        color: #979797;
        font-weight: bold;
      }
      &__append{
        display: flex;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
        padding: 15px 12px;
      }
    }
    &__collapsed{
      cursor: pointer;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
