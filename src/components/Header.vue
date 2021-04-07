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
            <b-form-input size="md" class="mr-sm-2" placeholder="Pesquisar"></b-form-input>
            <b-button size="md" class="my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></b-button>
          </b-nav-form>   
          <b-button variant="danger" class="ml-2" v-b-modal.modal-1>Login</b-button>       
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
  background-color: #141414 !important;
}
.logo{
  font-family: 'Train One', cursive;
}
.modal-content{
  background-color: #141414 !important;
  color: #fff;
  opacity: 0.9;
}
</style>