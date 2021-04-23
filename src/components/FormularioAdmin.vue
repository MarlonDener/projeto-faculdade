<template>

        <div class="formulario">

            <div class="row">

                <div class="container">

                  <h2 class="mb-3">Cadastro de noticias </h2>

                    <form>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Titulo da noticia :</label>
                            <input type="text" class="form-control" v-model="dadosNoticias.titulo">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Digite a sua noticia :</label>
                            <textarea class="form-control" id="exampleInputPassword1" v-model="dadosNoticias.textoNoticia"></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Imagem da noticia:</label>
                            <input type="file" class="form-control">
                        </div>

                        <button type="submit" class="btn btn-primary" @click.prevent="enviarDados">Submit</button>

                    </form>
                </div><!--container-->

            </div><!--row-->
        
        </div>

    
</template>


<script>
import firebase from 'firebase/app'
import dbfirebase from '../firebase/db.js'
export default {
  data(){
    return{
      dadosNoticias: {
        titulo: '',
        textoNoticia: '',
        dataPublicacao: firebase.firestore.FieldValue.serverTimestamp()
      }
    }
  },
  methods: {
    enviarDados(){
      console.log(`${this.dadosNoticias.titulo} - ${this.dadosNoticias.textoNoticia}`)
      dbfirebase.collection("noticias").add(this.dadosNoticias)
    }
  }
}
</script>

<style scoped>

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