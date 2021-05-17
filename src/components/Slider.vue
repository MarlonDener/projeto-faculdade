 <template>
 <div class="slider" id="inicio">
  <hooper :autoPlay="true" :playSpeed="4000" :infiniteScroll="true" class="hooper">
    <slide>
      <div class="imagem">
        <img src="/imagens/capasite.jpg">
      </div>
    </slide>
    <slide>
      <div class="imagem">
        <div class="opacidade"></div>
        <div class="info">
          <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui:</p>
          <a href="#">Ver mais</a>
        </div>
        <img src="/imagens/img13.jpg">
      </div>
    </slide>
    <slide>
       <div class="imagem">
        <div class="opacidade"></div>
          <div class="info">
            <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui:</p>
            <a href="#">Ver mais</a>
          </div>
          <img src="/imagens/img2.jpg">
       </div>
    </slide>
    <slide>
       <div class="imagem">
          <div class="opacidade"></div>
        <div class="info">
          <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui:</p>
          <a href="#">Ver mais</a>
        </div>
       <img src="/imagens/img9.jpg">
       </div>
       
    </slide>
    <slide>
       <div class="imagem">
      <div class="opacidade"></div>
        <div class="info">
          <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui: </p>
          <a href="#">Ver mais</a>
        </div>
       <img src="/imagens/img11.jpg">
       </div>
       
    </slide>
   
    <slide>
       <div class="imagem">
          <div class="opacidade"></div>
        <div class="info">
          <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui: </p>
          <a href="#">Ver mais</a>
        </div>
       <img src="/imagens/img14.jpg">
       </div>
    </slide>
   
    <slide>
       <div class="imagem">
        <div class="opacidade"></div>
          <div class="info">
            <p>Novos jogos disponíveis gratuitamente para PS4, Confira aqui:</p>
            <a href="#">Ver mais</a>
          </div>      
       <img src="/imagens/img7.jpg">
       </div>
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
  slide{
    background-size:100% 100%;

  }
  .imagem{
    height: 80vh;
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
    background: rgba(0,0,0,0.4);
    z-index: 3;
  }
  .hooper{
    width: 100%;
    height: 80vh;
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
    max-width: 700px;
    font-size: 24px;
    text-shadow: 3px 5px 4px 3px rgba(255,255,255,0.7);
  }
  .info a{
    border:1px solid #fff;
    text-align: center;
    padding:7px 50px;
    background-color:blueviolet;
    font-weight: lighter;
    max-width: 200px;
    border:none;
    color:#fff;
    text-decoration: none;
    border-radius: 7px;
    box-shadow:20px 5px 5px 4px rgba(0,0,0,0.5);
    transition: cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.4s;
    font-size: 24px;
    border:2px solid rgba(255,255,255,0.7);
  }

  .info a:hover{
    background:rgb(110, 6, 119);
  }

  @media (max-width:800px){
    .imagem{
    height: 70vh;
     width: 100%;
  }

  .hooper{
    width: 100%;
    height: 70vh;
  }

  .info p{
   font-size:18px;
  }
  }
</style>