<template>
 <section class="noticias2" id="noticias2">

      <h2 class="titulo">Mundo nerd</h2>

      <div class="rows">


        <div class="box-container">
         
          <a href="/noticia/oiQdjMO20wSImtiubwWG">
          <div class="box">
              <img src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">
              <div class="info">
                  <h3>01. Vídeo Games</h3>
                  <p><i class="fas fa-quote-left"></i>Vídeo games se tornaram ferramentas para lidar com o isolamento social durante a pandemia<i class="fas fa-quote-right"></i></p>
                  
              </div>
          </div>
          
          </a>
          <a href="/noticia/2MSfpGyH1go4bJlE7obm">
          <div class="box">
              <img src="https://img.ibxk.com.br/2021/06/07/07161134714352.jpg?w=704&h=264&mode=crop&scale=both" alt="">
              <div class="info">
                  <h3>02. Battlefield</h3>
                  <p><i class="fas fa-quote-left"></i>De acordo com um rumor, Battlefield 6 pode se chamar Battlefield 2042. O boato veio do Discord do insider Tom Henderson, o responsável por tornar público...<i class="fas fa-quote-right"></i></p>
              </div>
          </div>
          </a>
          

        </div>
        
        <img src="/imagens/divider.png" alt="divider" class="divider"/>

        <div class="box-container segundo">
            <a href="/noticia/W1msjIR4YzB9y1aNT3aj">
            <div class="box">
                <img src="https://www.gamerpoint.com.br/wp-content/uploads/2021/05/Call-of-duty-2021-Sledgehammer-Games-.jpg" alt="">
                <div class="info">
                    <h3>03. Call of Duty</h3>
                    <p><i class="fas fa-quote-left"></i>Call of Duty: Warzone já tem mais de 500 mil jogadores banidos<i class="fas fa-quote-right"></i></p>
                </div>
          </div>
          </a>

         <a href="/noticia/a830mgU0Mr5tLuOIvpFh">
          <div class="box">
              <img src="https://cdn.ome.lt/LLNZvNVy0JVkLATyKvy7uXrUVO0=/970x360/smart/uploads/conteudo/fotos/valorant_HAr0mZg.jpg" alt="">
              <div class="info">
                  <h3>04. Valorant</h3>
                  <p><i class="fas fa-quote-left"></i>Valorant: Riot tem planejamento para expandir história do jogo<i class="fas fa-quote-right"></i></p>
              </div>
          </div>
          
          </a>
          
        </div>

      </div>

    </section>
    
</template> 

<script>
    export default{
        name:'Noticias2Extra'
    }
</script>


<style scoped>
.noticias2 {
    margin:0 auto;
    width:90%;
}

.noticias2 .rows{
    display: flex;
}
.noticias2 .divider{
    padding:0 10px;
}
.noticias2 .rows .box-container .box img{
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    border:20px solid #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,0.9);
}

.noticias2 .rows .box-container .box .info{
    padding:20px 0;
}
.noticias2 .rows .box-container .box .info h3{
    font-size: 25px;
    color:#fff;
}

.noticias2 .rows .box-container .box .info p{
    font-size: 17px;
    color:#eee;
    padding:10px 0;
    font-style: italic;
}
.noticias2 .rows .box-container .box .info p i{
    color:#fff;
    padding: 0 .5rem;
}

.segundo{
    padding-top: 10rem;
}

@media (max-width:850px){
    
    .noticias2 .rows{
        flex-direction: column;
    }
    .noticias2 .rows .divider{
        display: none;
    }
    .segundo{
        display: none;
    }


}

</style>
