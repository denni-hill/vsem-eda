<template>
  <ul class="nav-bar__item__dropdown">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
  .nav-bar__item__dropdown{
    display: flex;
    background: #9CCB3B;
    flex-direction: column;
    position: absolute;
    margin: 100px 0 0 0;
    padding: 5px;
    .nav-bar__item{
      display: block;
    }
  }
</style>
