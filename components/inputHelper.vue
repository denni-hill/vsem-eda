<template>
  <transition>
    <ul class="input-helper">
      <li class="input-helper__item" v-for="(hint, index) in processedHints" :key="index" @click="$emit('itemSelected', hint)">
        <div class="input-helper__item__prepend">
          <slot name="prepend"></slot>
        </div>
        {{hint}}
      </li>
    </ul>
  </transition>
</template>

<script>
  export default{
    props:{
      search:{
        type: String,
        required: true
      },
      hints:{
        type: Array,
        required: true
      },
      hintsLimit:{
        type: Number,
        required: true
      }
    },
    computed:{
      processedHints: function () {
        let words = this.search.toLowerCase().split(' ').filter(word => word.length > 0);
        let entries = [];
        for(let i = 0; i < words.length && entries.length < this.hintsLimit; i++){
          entries = [...entries, ...this.hints.filter(hint => hint.toLowerCase().includes(words[i]))];
        }
        return entries.splice(0, this.hintsLimit);
      }
    }
  }
</script>

<style lang="scss">
  .input-helper{
    position: absolute;
    list-style: none;
    background: white;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    box-shadow: 2px 6px 20px rgba(119, 119, 119, 0.18);
    width: inherit;
    &__item{
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover{
        background-color: rgba(0,0,0,.01);
      }
      &__prepend{
        padding: 10px 15px;
      }
    }
  }
</style>
