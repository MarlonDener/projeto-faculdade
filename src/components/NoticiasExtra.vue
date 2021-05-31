<template>
 <section class="noticias2" id="noticias2">

      <h2 class="titulo">Mais noticias2</h2>

      <div class="rows">


        <div class="box-container">

          <div class="box">
              <img src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" alt="">
              <div class="info">
                  <h3>01. PS4</h3>
                  <p><i class="fas fa-quote-left"></i>Lorem ipsum is very nice, because so much things, 
                  stay more easy in write texts in your website. I hope one day, meet m ipsum is very nice,, m ipsum is very nice,<i class="fas fa-quote-right"></i></p>
                  
              </div>
          </div>
          
          <div class="box">
              <img src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" alt="">
              <div class="info">
                  <h3>02. Nitendo</h3>
                  <p><i class="fas fa-quote-left"></i>Lorem ipsum is very nice, because so much things, 
                  stay more easy in write texts in your website. I hope one day, meet m ipsum is very nice,, m ipsum is very nice,<i class="fas fa-quote-right"></i></p>
              </div>
          </div>
          

        </div>
        
        <img src="/imagens/divider.png" alt="divider" class="divider"/>

        <div class="box-container segundo">

          <div class="box">
              <img src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" alt="">
              <div class="info">
                  <h3>03. Venda de jogos</h3>
                  <p><i class="fas fa-quote-left"></i>Lore because so much things, 
                  stay more easy in write texts in your website. I hope one day, meet my wm ipsum is very nice,ay
                   the life, m ipsum is very nice,<i class="fas fa-quote-right"></i></p>
              </div>
          </div>

          <div class="box">
              <img src="https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80" alt="">
              <div class="info">
                  <h3>04. Nova geração</h3>
                  <p><i class="fas fa-quote-left"></i>Lorem ipsum is very nice, because so much things, 
                  stay more easy in write texts in your website. I hope one day, meet m ipsum is very nice,, m ipsum is very nice,<i class="fas fa-quote-right"></i></p>
              </div>
          </div>
          
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
