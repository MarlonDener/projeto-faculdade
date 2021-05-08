<template>

        <div class="sendEmail">
            <div class="container">
              <div class="imagem">
                <img src="/imagens/contatoimg.svg">
             </div>

                  <div class="form">
                      <h2>Entre em contato</h2>

                      <form>
                          <label>Email:</label>
                          <input type="email" class="form-control">
                          
                          <label>Assunto</label>
                          <input type="text" class="form-control">
                          <label>Mensagem:</label>
                          <textarea class="form-control">
                              
                          </textarea>

                          <button class="btn-roxo mt-4">Enviar</button>
                      </form>
                  </div>
        
             </div>
        </div>
</template>

<script>
    export default{
        name:'SendEmail',
    }
</script>

<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:30px 0px;
}
.image{
    width:30%;
}
.form{
    width: 70%;
}
img{
    width:100%;
    height: 100%;
}
.botao{
    width:250px;
    background-color: rgb(84, 15, 148);
    
}
h2{
    color:rgb(170, 4, 162);
    font-weight: 500;
    font-size: 50px;
    margin-bottom: 27px;
}

label{
    margin:7px 0px;
    color:#fff;
    font-weight:lighter;
    color:rgb(174, 7, 207);
    font-size: 17px;
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
    padding: 10px 4px;
    color:#666;

}

</style>