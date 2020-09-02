<template>
  <li class="auth-actions__user-details__list__item" v-on="$listeners">
    <div class="auth-actions__user-details__list__item__prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="auth-actions__user-details__list__item__content">
      <slot></slot>
    </div>
  </li>
</template>

<style lang="scss">
  .auth-actions__user-details__list__item{
    padding: 13px 30px;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    &:hover{
      background: rgba(0,0,0,.1);
      cursor: pointer;
    }

    &__content{
      margin-left: 12px;
    }
  }
</style>
