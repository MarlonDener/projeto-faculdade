<template>
<div class="allComponent">
   <div class="container"> 
    <div class="noticias">
            <!--<h2>O jogo está em promoção durante essa quarentena</h2>-->
            <h2>{{recebeDados.titulo}}</h2>
            <div class="info">
                <div class="descricao">
                 Noticia publicada chamou atenção nas redes sociais, com os fãns do game
                </div><!--descricao-->
                <div class="data">
                    Data Publicação: {{new Date(recebeDados.data.seconds * 1000).toLocaleDateString()}}
                </div><!--data-->

            </div><!--info-->
            <div class="imagem">
                <img src="/imagens/img12.jpg">
            </div>
            <div class="text-noticia">
               <p> {{ recebeDados.noticia}}</p>
            
               <!-- <p>When is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English.
                It is a long established fact that a reader will be distracted by.
                </p>
                <p>
                The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English.
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English.
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English.    
                </p>
                -->
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
                    data: ''
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

</style>