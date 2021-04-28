<template>
  <div id="page_home">
      <Slider />
      <Cards />
      <About />
      <SendEmail />
      <FooterPagina  />

  </div>
</template>

<script>
import Slider from './Slider';
import Cards from './Cards';
import About from './About';
import SendEmail from './SendEmail';
import FooterPagina from './FooterPagina';
export default {
  components:{
    Slider, Cards, About, SendEmail, FooterPagina
  }
}
</script>

<style>
#page_home{
max-height:400px;

}
</style>