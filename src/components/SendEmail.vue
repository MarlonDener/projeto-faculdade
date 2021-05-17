<template>

<section class="contact_container">

       <div class="contact" id="contact">

     <div class="heading_mobile">Rede de contato</div>      

    <div class="image">
        <img src="/imagens/contatoimg.svg" alt="" id="contato">
    </div>

    <form action="">

        <h1 class="heading">Entre em contato</h1>

        <div class="inputBox">
            <input id="nome" name="nome" type="text" required>
            <label for="nome">Nome</label>
        </div>

        <div class="inputBox">
            <input id="email" name="email" type="text" required>
            <label for="email">Email</label>
        </div>

        <div class="inputBox">
            <input name="telefone" id="telefone" type="number" required>
            <label for="telefone">Telefone</label>
        </div>

        <div class="inputBox">
            <textarea required name="message" id="message"></textarea>
            <label for="message">Mensagem</label>
        </div>

        <input type="submit" class="button btn-roxo" value="Enviar mensagem">

        </form>

       </div><!--contact-->

    </section>
</template>

<script>
    export default{
        name:'SendEmail',
    }
</script>

<style scoped>


/* PARTE 2 */

.contact_container{
    margin:0 auto;
    background: #0d0730;
}



.contact{
    margin:15px auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
} 

.contact .image{
     width:55%;
}

.contact .image img{
    width:100%;
    padding:2rem;
}

 .contact form{
     width: 45%;
     padding:1rem 3rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    background:#fff;
    margin:20px 0px;
}

.contact form .heading{
    text-align: left;
    font-weight: 500;
    padding:0;
    padding-bottom: 30px;
}
.heading_mobile{
    color:rgb(183, 37, 228);
    text-align: center;
    font-weight: 500;
    padding:0;
    padding: 30px 0px;
    font-size: 38px;
    display: none;
}
.contact form .inputBox{
     position: relative;
    }

    .contact form .inputBox input, .contact form .inputBox textarea{
        width:100%;
        background:none;
        color:#666;
        margin:1.5rem 0;
        padding:8px 0;
        border:none;
        font-size: 1.7rem;
         border-bottom: .1rem solid rgba(0,0,0,.1);
        text-transform: none;
        outline: none;
        font-size: 19px;
    }

.contact form .inputBox textarea{
    resize: none;
     height: 100px;
     padding-left:8px;
}

.contact form .inputBox label{
    position: absolute;
    top:1.7rem; left:0;
    font-size: 21px;
    color:#666;
     transition: .2s linear;
     cursor:pointer;
}
.box h4{
    padding: 15px 20px;
    font-size: 15px;
    color: var(--pink);
    text-transform: none;
}
.contact form .inputBox input:focus ~ label,
.contact form .inputBox input:valid ~ label,
 .contact form .inputBox textarea:focus ~ label,
.contact form .inputBox textarea:valid ~ label{
     top:-.4rem;
    font-size: 21px;
    color:#5d0694;
}

.button{
    font-size: 17px;
    width:200px;
}

@media (max-width:850px){
    .contact{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .contact .image{
        width:90%;
    }
    .contact form{
        width:90%;
    }
.contact form .heading{
    display: none;
}
.heading_mobile{
    display: block;
}
}
</style>