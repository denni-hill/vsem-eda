<template>
  <ul class="auth-actions__user-details__list">
    <slot></slot>
  </ul>
</template>

<style lang="scss">
  .auth-actions__user-details__list{
    position: absolute;
    list-style: none;
    margin: 30px 0;
    padding: 0;
    transform: translateX(-50%);
    background: white;
    box-shadow: 2px 3px 30px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
  }
</style>
