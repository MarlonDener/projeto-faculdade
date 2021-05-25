<template>
  <div id="admin" class="d-flex capa justify-content-center align-items-center">
    <form @submit.prevent="login" class="teste">
      <div class="row d-flex align-items-center flex-column justify-content-center">
        <div>
          <i class="far fa-user ajuste-icone-admin"></i>
        </div>
        <h4>Área de Membros</h4>
        <div class="mt-3 mb-3 col-10">
          <!-- <label for="exampleInputEmail1" class="ajuste-label">E-mail: </label> -->
          <input type="email" class="ajustes-input-admin" placeholder="Digite o nome de usuário" v-model="admin.email">
        </div>
        <div class="form-group col-10 mb-4">
          <!-- <label for="exampleInputPassword1" class="ajuste-label">Senha: </label> -->
          <input type="password" class="ajustes-input-admin" placeholder="Senha" v-model="admin.senha">
        </div>
        <a class="btn-roxo mb-5" type="submit" @click="login">Entrar</a>
        <a class="recuperar-senha" @click="voltarHome">Voltar para a tela inicial</a>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data(){
    return{
      admin: {
        email: '',
        senha: ''
      }
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user => {
      window.uid = user ? user.uid : null
      console.log(window.uid)
      if(window.uid){
        this.$router.push({path: '/FormularioAdmin'})
      }else{
        this.$router.push({path: '/login'})
      }
    })
  },  
  methods: {
    async login(){
      const email = this.admin.email
      const senha = this.admin.senha

      try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, senha)
        
        window.uid = res.user.uid

        this.$router.push({path: '/FormularioAdmin'})
        
        console.log(res)
      }catch(error){
        alert('Senha incorreta.')
      }
    },
    voltarHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
  #admin{
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,.3),rgba(0, 0, 0, 0.11)), url('/imagens/img6.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .ajuste-label{
    font-weight: 500;
    letter-spacing: 1px;
    color: #fff;
  }
  .btn-roxo{
    background-color: #5d0694;
    color: #fff;
    width: 140px;
    height: 40px;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.9s ease 0s;
    text-decoration: none;
    border:none;
    outline: none;
  }
  .btn-roxo:hover{
    background-color: #fff;
    color: #5d0694;
    border: 1px solid #5d0694;
    text-decoration: none;
  }
  .teste{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 60vh;
    background-color: #838591;
    opacity: 0.9;
    border-radius: 5%;
  }
  .ajuste-icone-admin{
    font-size: 40px;
  }
  .ajustes-input-admin{
    width: 100%;
    height: 55px;
    padding: 20px 20px;
  }
  .recuperar-senha{
    color: #5d0694;
  }
  .recuperar-senha:hover{
    cursor: pointer;
    color: #5d0694;
  }
</style>