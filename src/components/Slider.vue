 <template>
 <div class="slider" id="inicio">
  <hooper :autoPlay="true" :playSpeed="4000" :infiniteScroll="true" class="hooper">
    <slide>
     
      <div class="imagem">
        <img src="/imagens/capasite.jpg">
      </div>
    </slide>
    <slide>
       <a href="/noticia/P6v9B95PBFu2ezxGGLws">
      <div class="imagem">
        <div class="opacidade"></div>
        <div class="info">
           <p>Como jogar Shadow of the Tomb Raider (Guia para iniciantes)</p> 
           <a href="/noticia/P6v9B95PBFu2ezxGGLws" class="btn-roxo">Ler sobre</a>
         
        </div>
        <img src="/imagens/img13.jpg">
      </div>
      </a>
    </slide>
    <slide>
     <a href="/noticia/Z73ef4xW4bzuIqphfWgJ">
       <div class="imagem">
        <div class="opacidade"></div>
          <div class="info">
             <p>Marvel’s Spider-Man, vale a pena ? Confira aqui </p> 
             <a href="/noticia/Z73ef4xW4bzuIqphfWgJ" class="btn-roxo">Ler notícia</a> 
          </div>
          <img src="/imagens/img2.jpg">
       </div>
       </a>
    </slide>
    <slide>
      <a href="/noticia/W1msjIR4YzB9y1aNT3aj">
       <div class="imagem">
          <div class="opacidade"></div>
        <div class="info">
           <p>Mais de 500 mil jogadores banidos desde que o game foi lançado em março de 2020</p> 
           <a href="/noticia/W1msjIR4YzB9y1aNT3aj" class="btn-roxo">Ler notícia</a> 
        </div>
       <img src="/imagens/img9.jpg">
       </div>
       </a>
    </slide>
   
    <slide>
      
      <a href="/noticia/W1msjIR4YzB9y1aNT3aj">
       <div class="imagem">
        <div class="opacidade"></div>
          <div class="info">
             <p>A comparação dos gráficos Horizon Forbidden West e Horizon Zero Dawn</p> 
             <a href="/noticia/W1msjIR4YzB9y1aNT3aj" class="btn-roxo">Ler notícia</a> 
          </div>      
       <img src="/imagens/img7.jpg">
       </div>
       </a>
    </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
    
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&display=swap');
  slide{
    background-size:100% 100%;

  }
  .imagem{
    height: 70vh;
     width: 100%;
     position: relative;
     display: flex;
     align-items: center;
     justify-content: center;
    margin:0 auto;
  }
  .imagem .info {
    position:absolute;
    color:#fff;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index: 5;
  }
  .imagem img{
    width: 100%;
    height: 100%;
  position: absolute;
  top:0;
  left:0;
  z-index: 2;
  }
  .opacidade {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background: rgba(24, 19, 19, 0.6);
    z-index: 3;
    transition: 0.2s ease-in-out;
  }
  .opacidade:hover{
    background: rgba(24, 19, 19, 0.5);
  }

  .hooper{
    width: 100%;
    height: 70vh;
    outline: none;
    border:none;
  }
  hooper-pagination{
    outline: none;
    border:none;
  }
  .info{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .info p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    max-width: 1000px;
    font-size: 30px;
    text-shadow: 3px 5px 4px 3px rgba(255,255,255,0.7);
  }
  .info a{
    position: absolute;
    left: 0;
    bottom:-50px;
    width:200px;
    padding:23px 0px;
    font-size:17px;
    box-shadow: 4px 6px 5px 4px rgba(0,0,0,0.4);
  }

  @media (max-width:800px){
    .imagem{
    height: 55vh;
     width: 100%;
  }

  .hooper{
    width: 100%;
    height: 55vh;
  }

  .info p{
   font-size:22px;
   max-width: 100%;
   width: 100%;
  }
  .info a {
    display: none;
  }
      .info a{
    position: static;
    left: none;
    bottom: none;
    width:200px;
    padding:23px 0px;
    font-size:17px;
    box-shadow: 4px 6px 5px 4px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
    .info p{
      display:none;
    }

  }

</style>