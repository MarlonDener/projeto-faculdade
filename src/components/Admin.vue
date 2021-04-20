<template>
  <div id="admin" class="d-flex capa justify-content-center align-items-center">
    <form class="container">
      <div class="row d-flex align-items-center flex-column">
        <div class="form-group col-4">
          <label for="exampleInputEmail1" class="ajuste-label">E-mail:</label>
          <input type="email" class="form-control" placeholder="Digite o nome de usuário administrativo">
        </div>
        <div class="form-group col-4">
          <label for="exampleInputPassword1" class="ajuste-label">Senha</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
        </div>
        <button type="submit" class="btn btn-danger">Login</button>        
      </div>
    </form>
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
#admin{
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('/imagens/img6.jpg') no-repeat;
  background-size: 100% 100%;
}
.ajuste-label{
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
}
</style>