<template>
  <label class="checkbox control-checkbox">
    <slot></slot>
    <input type="checkbox" checked="checked" />
    <div class="checkbox-indicator"></div>
  </label>
</template>

<style scoped>
  .checkbox {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
  }
  .checkbox input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .checkbox-indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: 2px;
  }
  .checkbox:hover input ~ .checkbox-indicator,
  .checkbox input:focus ~ .checkbox-indicator {
    background: #cccccc;
  }

  .checkbox input:checked ~ .checkbox-indicator {
    background: #9ccb3b;
  }
  .checkbox:hover input:not([disabled]):checked ~ .checkbox-indicator,
  .checkbox input:checked:focus ~ .checkbox-indicator {
    background: #0e6647d;
  }
  .checkbox input:disabled ~ .checkbox-indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .checkbox-indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  .checkbox input:checked ~ .checkbox-indicator:after {
    display: block;
  }
  .control-checkbox .checkbox-indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .control-checkbox input:disabled ~ .checkbox-indicator:after {
    border-color: #7b7b7b;
  }
</style>
