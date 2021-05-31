<template>
  <div id="page_home">
      <Header />
      <Slider />
      <Cards />
      <About />
      <NoticiasExtra />
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
import NoticiasExtra from './NoticiasExtra.vue';
export default {
  components:{
    Header, Slider, Cards, About, Parallax ,SendEmail, FooterPagina,
    NoticiasExtra
  }
}
</script>

<style>
#page_home{
max-height:400px;

}
</style>