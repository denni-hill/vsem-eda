<template>
  <li class="nav-bar__item" v-on-clickaway="hideDropdown">
    <div class="nav-bar__item__content" @click="toggleDropdown()">
      <slot></slot>
    </div>
    <div v-if="dropdown" @click="toggleDropdown()" class="nav-bar__item__dropdown-toggle-indicator">
      <img v-if="!displayDropdown" src="@/static/expand.svg" alt="Больше">
      <img v-else src="@/static/collapse.svg" alt="Меньше">
    </div>
    <nav-bar__item__dropdown v-if="dropdown && displayDropdown">
      <slot name="dropdownItems">
      </slot>
    </nav-bar__item__dropdown>
  </li>
</template>

<script>
  import {mixin as clickAway} from 'vue-clickaway'
  import navBar__item__dropdown from './navBar__item__dropdown';
  export default {
    mixins:[clickAway],
    components:{
      navBar__item__dropdown
    },
    props:{
      dropdown:Boolean
    },
    data(){
      let displayDropdown = false;
      return {
        displayDropdown
      };
    },
    methods:{
      hideDropdown() {
        this.displayDropdown = false
      },
      toggleDropdown(){
        this.displayDropdown = !this.displayDropdown;
      }
    }
  }
</script>

<style lang="scss">
  .nav-bar__item{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 40px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    &.active{
      background: white;
      color: black;
    }
    &__content{
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      &__dropdown-toggle-indicator{
        justify-items: end;
      }
    }
  }
</style>
