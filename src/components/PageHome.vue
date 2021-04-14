<template>
  <div id="page_home">
      <Slider />
      <Cards />
  </div>
</template>

<script>
import Slider from './Slider';
import Cards from './Cards';
export default {
  components:{
    Slider, Cards
  }
}
</script>

<style>
#page_home{
max-height:400px;
}
</style>