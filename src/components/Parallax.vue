<template>
        <div id="parallax">
            
        <div class="container h-100" id="curiosidades">

            <div class="elementos">


                    <div class="card">
                            
                            <div class="vocesabia"><img src="/imagens/information.png" /></div>
                            <h3 class="mario">Mario</h3>
                            <div class="topo">
                                <img src="/imagens/mario1.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>
                                        Cartucho raro do jogo 'Super Mario' esquecido em gaveta por 35 anos é leiloado por R$ 3,7 milhões
                                        Jogo para NES foi lançado em 1986. Preço de US$ 660 mil (R$ 3,7 milhões) 
                                        foi o valor mais alto já pago em um leilão por um game, disse a empresa Heritage Auctions.
                                 </p>
                            </div>
                            
                    </div>

                    <div class="card">
                             <div class="vocesabia"><img src="/imagens/information.png" /></div>
                            <h3 class="kong">Kong</h3>
                             <div class="topo">
                                <img class="kong_up" src="/imagens/kong.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>Donkey Kong Country 3 é o único título da série lançado dos games para SNES que não contém uma ave como chefão. No primeiro DKC, a monstruosa
                                        Master Necky é a líder do segundo mundo. Já em DKC 2, Krow é o primeiro boss que precisa ser derrotado</p>
                    
                            </div>
                            
                    </div>

                    <div class="card">
                           <div class="vocesabia"><img src="/imagens/information.png" /></div>
                           <h3 class="sonic">Sonic</h3>
                           <div class="topo">
                                <img src="/imagens/sonic.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>A famosa tela inicial do jogo, que apresentava o logo da Sega, uma introdução do personagem 
                                        e algumas amostras das fases, ocupava 1/8 do cartucho! Isso deixava 
                                        cerca de 300 KB de espaço para o restante do jogo, o que é menos do que muitas fotos tiradas por celulares de hoje!</p>
                            </div>

            
                    </div>
 
             </div>

            </div>
            
        </div>
</template>

<script>

</script>




<style scoped>


    #parallax{
        padding:50px 10px;
        width: 100%;
        background-image: url('/imagens/mario.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    

    .elementos{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card{
        width:300px;
        background-color: rgb(0, 0, 0);
        padding-top:3px;
        padding-right: 9px;
        padding-left: 9px;
        padding-bottom: 4px;
        box-shadow: 5px 6px 7px 7px rgba(0,0,0,0.5);
        margin:0 auto;
        position: relative;
        border-radius: 5px;
        transition: 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    .card:hover{
        transform: scale(1.1);
    }
    .mario{
        top:-7px;
        color:rgb(136, 4, 4);
    }
    .kong{
        color:rgb(202, 93, 42);
    }
    .sonic{
        color:rgb(18, 9, 138);
    }
    .card h3{
        opacity: 0.5;
        text-shadow: 10px 25px 10px 6px rgba(173, 123, 123, 0.5);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size:100px;
        top:65px;
        z-index: 1;
    }
    .topo{
        display:flex;
        align-items:center;
        justify-content: center;
        width:100%;
    }
    .topo img{
            width:100px;
            height:100px;
            position: relative;
            top:20px;
            z-index: 2;
        }

    .texto-card{
        font-family: Arial, Helvetica, sans-serif;
        padding-top:40px;
        padding-bottom: 7px;
        padding-left: 5px;
        padding-right: 5px;
        font-weight: 500;
        color:#fff;
        transition: 0.5s linear all;
    }

    .kong_up{
        animation: up 1s linear infinite alternate-reverse;
    }
    @keyframes up{
        0%{
            
            transform: translateY(0px); 
            transform: scale(1);
        }
        100%{
            transform: scale(2);
            transform: translateY(-30px);
        }
    }

    .botao{
        display: inline-block;
    }

    .vocesabia{
        padding-bottom: 15px;
        padding-top: 5px;
        text-align: center;
    }

    @media (max-width:800px){
  
     #parallax{
        width: 100%;
        background-image: url('/imagens/mario.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        padding:30px 0px;
    }
    .elementos{
        height: 100%;
        flex-direction: column;
        margin:0 auto;
        justify-content: center;
    }

    .card{
        width:73%;
        margin:25px auto;
    }
    }
    @media (max-width:500px){
    .card{
        width:98%;
        margin:15px auto;
    }
    }
</style>

