<template>
    <div class="about">

        <h2 class="titulo">Sobre nós</h2>

        <div class="sobre_parte">

                <div class="imagem">    
                        s
                </div>

            <div class="sobre_texto">

               <p>Somos um grupo que densevolvemos esse site com o intuito de facilitar as notícias mais recente sobre o mundo dos games, sendo simples e prático na informação,
            caso tiver alguma sugestão, comentário ou algo em que podemos melhorar, isso será muito importante para a nossa empresa alcançar melhores resultados, por isso deixe no campo abaixo.</p>

            <button class="btn-roxo">Saber mais</button>


           </div>     

        </div>

     </div>
</template>

<script>

</script>

<style scoped>
            .about{
                margin:40px auto;
            }
            
            p{  
                padding:2px 0px;
                text-align: left;
                color:rgb(216, 216, 216);
                font-size: 18px;
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
        width:100%
    }
    }

    
</style>
