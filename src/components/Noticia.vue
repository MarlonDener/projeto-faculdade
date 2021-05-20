<template>
<div class="allComponent">
   <div class="container"> 
    <div class="noticias">
            <!--<h2>O jogo está em promoção durante essa quarentena</h2>-->
            <h2>{{recebeDados.titulo}}</h2>
            <div class="info">
                <div class="descricao">
                <!-- {{recebeDados.subtitulo}} -->
                </div><!--descricao-->
                <div class="data">
                    Data Publicação: {{new Date(recebeDados.data.seconds * 1000).toLocaleDateString()}}
                </div><!--data-->

            </div><!--info-->
            <div class="imagem">
                <img :src="recebeDados.imagem">
            </div>
            <div class="text-noticia">
               <p v-html="recebeDados.noticia"> {{ recebeDados.noticia}}</p>
            </div>

            <!-- Stars -->
            
        <h5 class="avaliacao">Deixe sua avaliação </h5>
<div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>

    <!--comentários-->

    
    <div class="form-floating mt-10">
      <textarea class="form-control mt-4" placeholder="Deixe seu comentário aqui: " id="floatingTextarea2" style="height: 100px"></textarea>
      <button class="btn btn-primary w-250 mt-3">Enviar</button>
 </div>
    </div>
  </div>

  <Footer />
   
</div>
</template>

<script>
    import dbfirebase from '../firebase/db.js'
    import Footer from './FooterPagina'
    export default{
        name:'Noticia',
        components:{
            Footer
        },
        data(){
            return{
                recebeDados: {
                    titulo: '',
                    noticia: '',
                    data: '',
                    imagem: '',
                    subtitulo: ''
                },
                id: ''
            }
        },
        created(){
          this.id = this.$route.params.id
          dbfirebase.collection("noticias").doc(this.id)
          .get()
          .then((doc) => {
            let dadosRecebidos = doc.data()
            console.log("dados: ", dadosRecebidos)

            this.recebeDados.titulo = dadosRecebidos.titulo
            this.recebeDados.noticia = dadosRecebidos.textoNoticia 
            this.recebeDados.data = dadosRecebidos.dataPublicacao
            this.recebeDados.imagem = dadosRecebidos.linkImagem
            this.recebeDados.subtitulo = dadosRecebidos.subNoticia
            console.log(this.recebeDados.imagem)
          })
        }
    }
</script>




<style scoped>
.noticias{
    padding: 30px 50px;
    margin:auto;
    min-height: 100vh;
}
.imagem{
    width:100%;
    height: 400px;
}
.imagem img{
    width:100%;
    height: 100%;
}
h2{
    color:#353434;
}
.info{
    display: flex;
    justify-content: space-between;
    padding: 11px 0;
    color:rgb(131, 130, 130);
}
.data{
    color:rgb(153, 151, 151);
}
.text-noticia{
    padding: 20px 0;
}
.text-noticia p{
    color:rgb(37, 37, 37);
    font-size: 18px;
    font-family:Arial, Helvetica, sans-serif;
    text-indent: 3rem;
    line-height: 28px;
}

*{
    margin: 0;
    padding: 0;
}
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #7d1392;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
     color: #7d1392; 
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
     color: #7d1392; 
}
.title_coment{
    margin-top:25px;
}
textarea{
    resize: none;
}
.avaliacao{
    font-size: 20px;
    color:#363636;
    padding:0 15px;
}
button{
    width: 150px;
    font-size: 18px;
}
</style>