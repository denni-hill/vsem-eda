<template>
  <transition name="fade" mode="out-in">
    <div class="modal-wrapper" v-if="displayModal">
      <div class="modal">
        <div class="modal__close-button-wrapper">
          <div class="modal__close-button" @click="$emit('close')">
            <img src="@/static/cross.svg" alt="Закрыть">
          </div>
        </div>
        <div class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__content">
          <slot></slot>
        </div>
        <div class="modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props:{
      displayModal:{
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .modal-wrapper{
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
  .modal{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 10px;
    &__close-button-wrapper{
      text-align: right;
    }
    &__close-button{
      padding: 15px;
      display: inline-flex;
      cursor: pointer;
    }
    &__header{
      display: flex;
      flex-direction: column;
      font-weight: 600;
      font-size: 20px;
    }
    &__content{
      margin-top: 40px;
    }
    &__header, &__content, &__footer{
      margin-left: 35px;
      margin-right: 35px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
