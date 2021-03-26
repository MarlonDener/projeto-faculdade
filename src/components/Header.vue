<template>
  <div>
<b-navbar toggleable="lg" class="p-3 cor-barra" type="dark" variant="">
    <b-navbar-brand href="#" class="logo">NomeSite</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Contato</b-nav-item>      
        <b-nav-item href="#" class="mr-2">Sobre</b-nav-item>  
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Pesquisar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></b-button>
        </b-nav-form>            
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>   
  </div>
</template>

<script>
export default {};
</script>

<style>
.cor-barra {
  background-color: #141414 !important;
}
.logo{
  font-family: 'Train One', cursive;
}
</style>