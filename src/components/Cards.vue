<template>
  <div class="area-cards container text-center" id="noticias">
    <div class="row">
      <div  class="col-md-4"  v-for="noticia in noticias" :key="noticia.teste">
        <div class="card mt-3 mb-3" style="width: 18rem;">
            <!-- <img src="/imagens/img1.jpeg" class="card-img-top" alt="..."> -->
            <img :src="noticia.linkImagem" class="card-img-top " alt="...">
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{{noticia.titulo}}</h5>
                <p class="card-text">{{noticia.subNoticia.substring(0, 170)}}...</p>
                <a href="#" class="btn-roxo" @click="lerNoticia(noticia)">Ler notícia</a>
            </div>
          <div class="card-footer espacamento"> 
            <small class="text-muted">Atualização: {{new Date(noticia.dataPublicacao.seconds * 1000).toLocaleDateString()}}</small>  
          </div> 
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
import dbfirebase from '../firebase/db.js' 

export default{
  data(){
    return{
      noticias: []
    }
  },
  created(){
    const dados = []
    dbfirebase.collection("noticias")
    .get()
    .then(res => {
      res.forEach(doc => {
        let noticia = doc.data()

        dados.push(noticia)
        this.noticias = dados

        console.log(this.noticias)
      })
    })
  },
  methods: {
    lerNoticia(noticia){
      console.log(noticia)
      this.$router.push({name: 'Noticia', params: {id: noticia.id_noticia }})
    }
  }
}
</script>

<style>
.espacamento{
    padding: 10px 3px;
    text-align: right;
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
}

.card-img-top {
  height: 150px;
}

</style> 