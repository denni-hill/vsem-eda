<template>
  <div class="nav-bar-wrapper">
    <ul class="container nav-bar">
      <nav-bar__item class="active">Все</nav-bar__item>
      <nav-bar__item>Суши</nav-bar__item>
      <nav-bar__item>Пицца</nav-bar__item>
      <nav-bar__item>Бургеры</nav-bar__item>
      <nav-bar__item>Фастфуд</nav-bar__item>
      <nav-bar__item>Шашлыки</nav-bar__item>
      <nav-bar__item>Азиатская</nav-bar__item>
      <nav-bar__item>Десерты</nav-bar__item>
      <nav-bar__item>Здоровая еда</nav-bar__item>
      <nav-bar__item :dropdown="true">Ещё<template slot="dropdownItems"><nav-bar__item>321321231</nav-bar__item></template> </nav-bar__item>
    </ul>
  </div>
</template>

<script>
  import navBar__item from './navBar__item'
  export default {
    components:{
      navBar__item
    }
  }
</script>

<style lang="scss">
  .nav-bar-wrapper{
    background: #9CCB3B;
  }

  .nav-bar{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
  }
</style>
