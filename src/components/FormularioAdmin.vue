<template>
  <div>
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

                <div class="mb-4 area-quill">            
                  <quill-editor
                    :options="editorOption"
                    v-model="dadosNoticias.textoNoticia"
                    class="altura_quill"
                  />                            
                </div>
                
                <div class="mb-4">
                    <label for="exampleInputPassword1" class="form-label">Digite o subtitulo da noticia :</label>
                    <textarea class="form-control" id="exampleInputPassword1" v-model="dadosNoticias.subNoticia"></textarea>
                </div>

                <div class="d-flex justify-content-center">
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
      }      
    }
  },
  methods: {
    enviarDados(){
      console.log(`${this.dadosNoticias.titulo} - ${this.dadosNoticias.textoNoticia}`)
      dbfirebase.collection("noticias").add(this.dadosNoticias)
      .then((doc) => {
        dbfirebase.collection("noticias").doc(doc.id)
        .update({
          "id_noticia": doc.id
        })
      })

    }
  }
}
</script>

<style scoped>
  .formulario{
    height: 100vh;
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
</style>