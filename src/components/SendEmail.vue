<template>

        <div class="sendEmail">
            <div class="container">
                    <form id="contato">
                        <h2>Envie sugestões</h2>
                        <p>Caso tenha um idéia para agregar em nossos serviços, dúvidas, ou algum produto que gostaria de ter, envia a sua mensagem. </p>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white">Informe o seu email: </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Envie a sua mensagem: </label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <button type="submit" class="btn btn-info botao">Enviar</button>
                    </form>
             </div>
        </div>
</template>

<script>
    export default{
        name:'SendEmail',
    }
</script>

<style scoped>
  h2{
          font-size: 28px;
          color:rgb(184, 0, 168);
          text-align: center;
          text-shadow:2px 3px 5px rgba(204, 17, 204, 0.445);        
          padding-top:10px;
      }

     p{  
          padding:15px 0px;
          text-align: center;
          color:rgb(216, 216, 216);
          font-size: 15px;
    }

.container{
    border:1px solid rgba(255, 255,255,0.2);
    box-shadow:4px 3px 7px 3px rgba(255, 255,255,0.1);
    border-radius: 7px;
}

.botao{
    width:250px;
    background-color: rgb(84, 15, 148);
    
}

input{
    width:100%;
}

.sendEmail{
    margin-top:45px;
}
textarea{
    resize:none;
    height: 170px;
    padding: 15px;
    color:#666;

}

</style>