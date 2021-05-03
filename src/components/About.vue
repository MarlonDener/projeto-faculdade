<template>
    <div class="about">

        <h2>Sobre nós</h2>

        <div class="container">
            <div class="row">

                    <div class="col-md-6">
                        <div class="imagem">
                            <!--imageBackground-->
                        </div>
                    </div>

                    <div class="col-md-6">
                        <p>Somos um grupo que densevolvemos esse site com o intuito de facilitar as notícias mais recente sobre o mundo dos games, sendo simples e prático na informação,
                            caso tiver alguma sugestão, comentário ou algo em que podemos melhorar, isso será muito importante para a nossa empresa alcançar melhores resultados, por isso deixe no campo abaixo.</p>
                  </div>   
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
            h2{
                margin:0 auto;
                font-size: 32px;
                font-weight: lighter;
                padding:30px 0;
                color:#fff;
                width: 200px;
            }

            h2::after{
                content: '';
                display: block;
                width:50px;
                height: 4px;
                background-color: blueviolet;
                transition: all ease 0.3s;
            }

            h2:hover::after{
                 width:140px;
            }

            p{  
                padding:2px 0px;
                text-align: left;
                color:rgb(216, 216, 216);
                font-size: 18px;
            }

    .imagem{
        width:95%;
        height: calc(100% + 50px);
        background-image: url('/imagens/img90.png');
        background-size: 100% 100%;
        background-position: center;
    }

    
</style>
