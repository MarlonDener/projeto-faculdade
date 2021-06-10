<template>
  <div>
    <div id="modal-form" class="modal-form" v-if="modal_form">
      <span class="icone-check"><i class="far fa-check-circle"></i></span>
      <p>Notícia postada com sucesso!</p>
    </div>
    <HeaderLogin />
    <div class="formulario">
        <div class="row">
          <div class="container">
            <h2 class="mb-1">Cadastrar Notícias </h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Titulo da noticia :</label>
                    <input type="text" class="form-control" v-model="dadosNoticias.titulo" placeholder="Digite o titulo da notícia">
                </div>

                <div class="mb-4">
                    <label class="form-label">Imagem da noticia:</label>
                    <input v-model="dadosNoticias.linkImagem" type="text" class="form-control" placeholder="Cole o link da imagem">
                </div>  

                <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">Digite o subtitulo da noticia :</label>
                    <textarea class="form-control" id="exampleInputPassword1" v-model="dadosNoticias.subNoticia"></textarea>
                </div>                

                <div class="mb-5 area-quill">            
                  <quill-editor
                    :options="editorOption"
                    v-model="dadosNoticias.textoNoticia"
                    class="altura_quill"
                  />                            
                </div>
                
                <div class="d-flex justify-content-center mt-3">
                  <button type="submit" class="btn btn-outline-primary" @click.prevent="enviarDados">Cadastrar Notícia</button>
                </div>
            </form>
          </div><!--container-->
        </div><!--row-->
      </div>     
  </div>
</template>


<script>
import HeaderLogin from './Header_Login'
import firebase from 'firebase/app'
import dbfirebase from '../firebase/db.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  components: {HeaderLogin, quillEditor},  
  data(){
    return{
      dadosNoticias: {
        titulo: '',
        textoNoticia: '',
        dataPublicacao: firebase.firestore.FieldValue.serverTimestamp(),
        linkImagem: '',
        id_noticia: '',
        subNoticia: ''
      },
      editorOption: {
        // Some Quill options...
      },
      modal_form: false      
    }
  },
  methods: {
    enviarDados(){
      if(this.dadosNoticias.titulo === '' || this.dadosNoticias.textoNoticia === '' || this.dadosNoticias.linkImagem === '' || this.dadosNoticias.subNoticia === ''){
        alert('Preencha todos os campos corretamente')
      }else{
        console.log(`${this.dadosNoticias.titulo} - ${this.dadosNoticias.textoNoticia}`)
        dbfirebase.collection("noticias").add(this.dadosNoticias)
        .then((doc) => {
          dbfirebase.collection("noticias").doc(doc.id)
          .update({
            "id_noticia": doc.id
          })
        })
        .then(() => {
          this.modal_form = true
          setTimeout(() => {
            this.modal_form = false
            this.dadosNoticias.titulo = ''
            this.dadosNoticias.textoNoticia = ''
            this.dadosNoticias.linkImagem = ''
            this.dadosNoticias.subNoticia = ''
          }, 1500)
        })
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap');
  .modal-form{
    width: 100%;
    position: fixed;
    top: 0%;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #05F140;
  }
  .icone-check{
    font-size: 45px;
    animation: efeitozoom 1s infinite ;
  }
  #modal-form p{
    margin-top: -10px;
    font-size: 30px;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
  }
  .formulario{
    height: 100vh;
    background-color: #fff;
    color: #000000;
  }
  .area-quill{
    height: 30vh;
  }
  .altura_quill{
    height: 20vh;
  }
  h2{
      text-align: center;
      font-weight: lighter;
      padding-top:20px;
  }
  button{
      margin-top:15px;
      width:200px;
  }
  textarea {
      resize: none;
  }
  @keyframes efeitozoom{
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }    
  }
</style>