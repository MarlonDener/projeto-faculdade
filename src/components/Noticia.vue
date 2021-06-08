<template>
  <div class="allComponent" v-bind:class="[white ? 'whiteB' : 'darkB']">
    <HeaderNoticias />
    <div class="container">
      <div class="noticias">
        <!--<h2>O jogo está em promoção durante essa quarentena</h2>-->
        <h2 v-bind:class="[white ? 'darkColor' : 'whiteColor']">{{ recebeDados.titulo }}</h2>
        <div class="info">
          <div class="descricao">
            <!-- {{recebeDados.subtitulo}} -->
          </div>
          <!--descricao-->
          <div class="data">
            Data Publicação:
            {{ new Date(recebeDados.data.seconds * 1000).toLocaleDateString() }}
          </div>
          <!--data-->
        </div>
        <!--info-->
        <div class="imagem">
          <img :src="recebeDados.imagem" />
        </div>
        <div class="text-noticia" v-bind:class="[white ? 'darkColor' : 'whiteColor']">
          <p v-html="recebeDados.noticia">{{ recebeDados.noticia }}</p>
        </div>

      </div>

    <div class="share_news">
          <a class="f" href=""><i style="font-size:25px;" class="fab fa-facebook"></i>Facebook</a>
          <a class="w" href=""><i style="font-size:25px;" class="fab fa-whatsapp"></i>Whatsapp</a>
          <a class="l" href=""><i style="font-size:25px;" class="fab fa-linkedin"></i>Linkedin</a>  
    </div>  
      
    </div><!--container-->
    
      <div class="container">
        <h4>Mais noticias</h4>
      </div>
      <section class="more">
        
              <div class="only" v-for="noticia in noticias2" :key="noticia.titulo">
                
                <a href="" @click="lerNoticia(noticia)">
                  <div class="container_more"> 
                      <div class="image_more">
                        <img :src="noticia.linkImagem" />
                      </div>
                      
                      <div class="text_more" v-bind:class="[white ? 'darkColor' : 'whiteColor']">
                        <p>{{noticia.titulo.substring(0,60)}}...</p>
                      </div>
                    </div><!--container-more-->
               </a>     
               </div>
        </section>

        <div id="toggle" @click="changeColor">
          <i class="indicator" v-bind:class="white ? 'noActive' : 'Active'"></i>
        </div>

<!--
    <section class="redes">
        <div class="coluna-redes">
          <div v-if="white" style="color:#fff">apareceu</div>
          <div class="trocar" style="color:#fff;cursor:pointer" @click="changeColor">change</div>
           <a :href=getUrl><div class="link f" target="_blank"><i class="fab fa-facebook-f"></i></div></a>
           <a href="https://www.facebook.com/sharer/sharer.php?u=https://ayltoninacio.com.br/blog/botoes-share-redes-sociais-html-puro">
            <div class="link l"><i class="fab fa-linkedin-in"></i></div></a>
            <div class="link t"><i class="fab fa-twitter"></i></div>
        </div>
    </section>

    -->
    <Footer />
  </div>
</template>

<script>
import dbfirebase from "../firebase/db.js";
import HeaderNoticias from './HeaderNoticias'
import Footer from "./FooterPagina";
export default {
  name: "Noticia",
  components: {
    HeaderNoticias,
    Footer,
  },
  data() {
    return {
      recebeDados: {
        titulo: "",
        noticia: "",
        data: "",
        imagem: "",
        subtitulo: "",
      },
      id: "",
      noticias2: [],
      getUrl: '',
      white: true,
    };
  },
  mounted(){
    console.log(this.$route.path);
  },
  created() {
    this.getNoticia();
    this.getMoreNoticias();
    this.getUrlMethod();
  },
  methods:{
    getNoticia(){
      
    this.id = this.$route.params.id;
    dbfirebase
      .collection("noticias")
      .doc(this.id)
      .get()
      .then((doc) => {
        let dadosRecebidos = doc.data();
        console.log("dados: ", dadosRecebidos);

        this.recebeDados.titulo = dadosRecebidos.titulo;
        this.recebeDados.noticia = dadosRecebidos.textoNoticia;
        this.recebeDados.data = dadosRecebidos.dataPublicacao;
        this.recebeDados.imagem = dadosRecebidos.linkImagem;
        this.recebeDados.subtitulo = dadosRecebidos.subNoticia;
      });
    },
    getMoreNoticias(){
          const dados = []
    dbfirebase.collection("noticias").limit(3)
    .get()
    .then(res => {
      res.forEach(doc => {
        let noticia = doc.data()

        dados.push(noticia)
        this.noticias2 = dados

        console.log(this.noticias2)
      })
    })
    },
    
    lerNoticia(noticia){
      console.log('ok')
      this.$router.push({name: 'Noticia', params: {id: noticia.id_noticia }})
    },
    getUrlMethod(){
      console.log('ok')
    },
    changeColor(){
      this.white = !this.white;
    },

  },
};
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&display=swap');

h2 { 
    border-bottom: 1px solid #e2e2e2;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    text-align: center;
    padding: 0px 0 21px;
    margin-bottom: 23px;
    font-weight: bold;
    margin-top: 60px;
}
.darkColor{
    color: rgb(212, 212, 212);
}
.whiteColor{
     color:#3f3f3f;
}
.whiteB{
  
    transition: 0.3s cubic-bezier(.36, .11, .89, .32);
     background:rgb(3, 0, 15);
}
.darkB{
  transition: 0.3s cubic-bezier(.36, .11, .89, .32);
  background:rgb(250, 250, 250);
}
.dark{
     background:rgb(255, 255, 255);
}
h4{
    font-family: 'Montserrat', sans-serif;
    padding-top: 48px;
    padding-bottom: 20px;
    font-size: 20px;
    color: rgb(104, 93, 250);
    border-top: thin solid #e2e2e2;
    
}
#toggle{
  cursor: pointer;
  position: fixed;
  display: block;
  right: 0;
  top:50%;
  transform: translateY(-50%);
  width: 100px;
  height: 50px;
  border-radius: 50px;
  box-shadow: inset 0 8px 60px rgba(186, 2, 241, 0.1),
  inset 0 8px 8px rgba(0,0,0,0.1),
  inset 0 -4px 4px rgba(0,0,0,0.1);
}
#toggle .indicator{
  position: absolute;
  top:0;
  width:50px;
  height: 50px;
  border-radius: 50%;
  transform: scale(0.9);
  box-shadow: inset 0 8px 40px rgba(198, 0, 216, 0.1),
  inset 0 4px 4px rgba(0,0,0,0.1),
  inset 0 -4px 4px rgba(0,0,0,0.1);
  cursor: pointer;
}
#toggle .indicator.noActive{
  left: 0;
  background: linear-gradient(to bottom, #444,#222);
  transition: 0.5s ease-in-out;
}
#toggle .indicator.Active{
  left:50px;
  background: linear-gradient(to bottom, #fff,#ccc);
  transition: 0.5s ease-in-out;
  }
.noticias{
  width:100%;
}
.imagem{
  width:100%;
}
.imagem img{
  width:100%;
}
.data {
  color: rgb(153, 151, 151);
  float: right;
  font-size: 19px;
  padding-bottom: 8px;
}

.title_coment {
  margin-top: 25px;
}
textarea {
  resize: none;
}
.avaliacao {
  font-size: 20px;
  color: #363636;
  padding: 0 15px;
}
button {
  width: 150px;
  font-size: 18px;
}
.text-noticia{
  padding:20px 0;
  font-size: 20px;
  font-weight: lighter;
  width:100%;
  background-size: cover;
}
.more{
  padding-top:5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_more{
  display: flex;
  justify-content: center;
  align-items: center;
}
.text_more{
  text-align: left;
  width:50%;
  padding-left: 15px;
  font-size: 15px;
}

.image_more{
  width:50%;
}

.share_news a i{
  position: relative;
  top:3px;
  margin-right: 10px;
}
.only{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width:360px;
  cursor: pointer;
  margin:5px 15px;
  transition: all 0.5s linear;
}
.only:hover{
  opacity: 0.9;
}

.only img{
  height: 130px;
  width:100%;
  border-radius: 15px;
}
.redes{
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  right: 5px;
}
.coluna-redes{
  display: flex;
  flex-direction: column;
}
.coluna-redes .link{
  text-align: center;
  padding:10px 19px;
  color:#fff;
  box-shadow: 5px 4px 3px 2px rgb(0, 0, 0);
  border-radius: 4px;
  margin-top: 6px;
  cursor: pointer; 
  transition: 0.5s all linear;
  }
 .coluna-redes .link:hover{
   filter:brightness(1.7);

 } 
.coluna-redes .link.f{
  background: rgb(3, 25, 149);
}
.coluna-redes .link.l{
  background: rgb(38, 61, 192);
}
.coluna-redes .link.t{
  background: rgb(57, 117, 230);
}

.btn-more{
  background: rgb(88, 0, 54);
  color:#e2e2e2;
  text-decoration: none;
  padding:5px 10px;
}
.share_news{
  display: flex;
}
.share_news a{

  margin:9px 5px;
  width:250px;
  padding:8px 3px;
  text-align: center;
  color:#fff;
  font-family: 'Montserrat', sans-serif;
}
.share_news .f{
  background: rgb(23, 13, 167);
}
.share_news .w{
  background: rgb(41, 180, 53);
}
.share_news .l{

  background: rgb(51, 39, 219);
}
@media (max-width:900px){
  .only{
  height: 100px;
  width:80%;
  margin:20px 0px;
  }
  
#toggle{
  cursor: pointer;
  position: fixed;
  display: block;
  left: 10px;
  top:100px;
}
.more{
  padding-top:5px;
  flex-direction: column;
}
.container_more{
  display: flex;
  justify-content: center;
  align-items: center;
}

.image_more{
  width:100%;
}
h2 { 
    font-size: 24px;
}
.text-noticia{
  font-size: 18px;
}


}
</style>