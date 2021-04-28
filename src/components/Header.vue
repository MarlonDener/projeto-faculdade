<template>
  <div>
    <b-navbar toggleable="lg" class="p-3 cor-barra" type="dark" variant="">
      <b-navbar-brand href="#" class="logo"><img class="imageLogo" src="/imagens/logot.png" />GamesClub</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="menu-item-a text-white mr-8" href="#home">Home</b-nav-item>
          <b-nav-item class="menu-item-a text-white mr-8" href="#contato">Contato</b-nav-item>      
          <b-nav-item class="menu-item-a text-white mr-8" href="#sobre">Sobre</b-nav-item>          
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>   
  <!--Modal-->
    <div>
      <b-modal id="modal-1" hide-footer title="Login" >
          <form>
            <div class="form-group">
              <label>E-mail:</label>
              <input class="form-control" placeholder="Digite seu e-mail.." type="text">             
            </div>

            <div class="form-group">
              <label>Senha:</label>
              <input class="form-control" placeholder="Digite sua senha.." type="password">             
            </div>   

            <div class="row">
              <div class="d-flex justify-content-center col-12">
                <button class="btn btn-secondary mt-2 mb-4">Entrar</button>                
              </div>  
            </div>  
          </form>    
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style>
.cor-barra {
  background-color: #111 !important;
}
.logo{
  font-family: 'Train One', cursive;
}
.modal-content{
  background-color: #141414 !important;
  color: #fff;
  opacity: 0.9;
}
.imageLogo{
  padding:0 1px;
  width: 87px;
  position: relative;
  top:-5px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;

}
.menu-item-a{
  color:#fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  margin:0 15px;
}
</style>