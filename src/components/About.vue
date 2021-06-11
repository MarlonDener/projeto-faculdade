<template>
    <div class="background">
    <div class="opacity"></div>
    <div class="about" id="about">

        <h2 class="titulo">Sobre nós</h2>

        <div class="sobre_parte">

                <div class="imagem">    
                    
                </div>

            <div class="sobre_texto">

               <p>Nossa empresa foi fundada com a missão de facilitar o acesso sobre as notícias mais recente do mundo dos games, sendo simples e prático na informação,
            caso tiver alguma sugestão, comentário ou algo em que podemos melhorar, isso será muito importante para a nossa empresa alcançar melhores resultados. Pois sempre buscamos a melhor experiência do nosso leitor.</p>

           </div>     

        </div>

     </div>
     </div>
</template>

<script>

</script>

<style scoped>
            .background{
                
    width:100%;
    background-image: url('https://wallpaperforu.com/wp-content/uploads/2020/10/video-game-wallpaper-20100520224036-scaled.jpg');
       background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        position: relative;
            }
            .opacity{
                width:100%;
                height: 100%;
                position: absolute;
                top:0;
                left: 0;
                background-color: rgba(0,0,0,0.7);
                z-index: 2;
            }
            .about{
                margin:40px auto;
                z-index: 4;
                position: relative
            }
            
            p{  
                padding:2px 0px;
                text-align: left;
                color:#fff;
                font-size: 20px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: lighter;
            }

    .imagem{
        width:50%;
        height: 400px;
        background-image: url('/imagens/img90.png');
        background-size: 100% 100%;
        background-position: center;
        animation: rodar 3s infinite alternate-reverse;
    }

    @keyframes rodar{
        0%{
            transform: translate(-5px) rotate(-5deg);   

        }100%{
            
            transform: translate(5px) rotate(5deg);  
        }
    }

    .sobre_parte{
        display: flex;
        justify-content: center;
        align-items: center;
        padding:20px;
    }

   
    .sobre_texto{
        width: 50%;
        background-color: rgba(0,0,0,0.6);
        padding:25px;
        border-radius: 20px;
        box-shadow: 10px 10px 20px 10px rgba(0,0,0,0.6);

    }
    .botaoColor{
        width:200px;
        background: rgb(117, 10, 150);
        font-weight: 500;
        color:#fff;
    }
    
    @media(max-width:750px){
        .texto{
            padding-top: 50px;
        }
       .sobre_parte{
           flex-direction: column-reverse;
       } 
        
    .sobre_texto{
        width: 100%;
    }
    .imagem{
        width:100%;
        height: 250px;
    }
       p{  
                padding:2px 0px;
                text-align: left;
                color:#fff;
                font-size: 17px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: lighter;
            }
    }

    
</style>
