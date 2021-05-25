<template>
  <div id="page_home">
      <Header />
      <Slider />
      <Cards />
      <About />
      <Parallax />
      <SendEmail />
      <FooterPagina  />

  </div>
</template>

<script>
import Header from './Header'
import Slider from './Slider';
import Cards from './Cards';
import About from './About';
import Parallax from './Parallax'
import SendEmail from './SendEmail';
import FooterPagina from './FooterPagina';
export default {
  components:{
    Header, Slider, Cards, About, Parallax ,SendEmail, FooterPagina
  }
}
</script>

<style>
#page_home{
max-height:400px;

}
</style>