<template>
        <div id="parallax">
            
        <div class="container h-100">

            <div class="elementos">


                    <div class="card">
                            <h3 class="mario">Mario</h3>
                            <div class="topo">
                                <img src="/imagens/mario1.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>Lorem ipsumi psumips 
                                        Lorem ipsumi psumips umipsum ipsumipsumipsumumipsum ipsumipsumipsum</p>
                                        Lorem ipsumi psumips umipsum ipsumipsumipsum
                            </div>
                            
                            <button class="btn-roxo">Ver jogo</button>
                    </div>

                    <div class="card">

                            <h3 class="kong">Kong</h3>
                             <div class="topo">
                                <img class="kong_up" src="/imagens/kong.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>Lorem ipsumi psumips 
                                        Lorem ipsumi psumips umipsum ipsumipsumipsumumipsum ipsumipsumipsum</p>
                                        Lorem ipsumi psumips sadsadsadsumipsum ipsumipsumipsum
                            </div>
                            
                           <button class="btn-roxo">Ver jogo</button>
                    </div>

                    <div class="card">
                      
                            <h3 class="sonic">Sonic</h3>
                           <div class="topo">
                                <img src="/imagens/sonic.png">
                            </div>
                            
                            <div class="texto-card">
                                    <p>Lorem ipsumi psumips 
                                        Lorem ipsumi psumips umipsum ipsumipsumipsumumipsum ipsumipsumipsum
                                        Lorem ipsumi psumips umipsum isadasdsadpsumissspsumipsum</p>
                            </div>

                            <button class="botao btn-roxo">Ver jogo</button>
                    </div>
 
             </div>

            </div>
            
        </div>
</template>

<script>

</script>



<style scoped>



    #parallax{
        height: 80vh;
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
        background-color: rgba(255, 255, 255, 0.822);
        padding:20px 9px;
        box-shadow: 5px 6px 5px 3px rgba(0,0,0,0.2);
        margin:0 auto;
        position: relative;
        border-radius: 5px;
    }
    button{
        margin:auto;
    }

    .mario{
        top:-7px;
        color:rgb(136, 4, 4);
    }
    .kong{
        color:rgb(61, 21, 2);
    }
    .sonic{
        color:rgb(18, 9, 138);
    }
    .card h3{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size:100px;
        top:0px;
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
            z-index: 2;
        }

    .texto-card{
        font-family: Arial, Helvetica, sans-serif;
        padding: 20px 0px;
        font-weight: 500;
    }

    .kong_up{
        animation: up 1s linear infinite alternate-reverse;
    }
    @keyframes up{
        0%{
            
            transform: translateY(10px); 
            transform: scale(1);
        }
        100%{
            transform: scale(2);
            transform: translateY(-80px);
        }
    }

    .botao{
        display: inline-block;
    }
</style>

