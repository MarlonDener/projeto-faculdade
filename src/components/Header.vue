<template>
  <div>

    <header>
          <div class="desktop_menu">
              <div class="logo"><img src="/imagens/logot.png" /></div>
              <nav>
                  <ul>
                      <li><a href="/">Início</a></li>
                      <li><a href="#noticias">Noticias</a></li>
                      <li><a href="#about">Sobre</a></li>
                      <li><a href="#ofertas">Ofertas</a></li>
                      <li><a href="#contato">Contato</a></li>
                  </ul>
              </nav>
            
          </div> 
   <div class="button-menu" :class="MenuActive ? 'active' : ''" v-on:click="activeMenu"></div> 
   <div class='mobile_menu' :class="MenuActive ?  'active' : ''">

              <nav>
                  <ul>
                      <li><a v-on:click="activeMenu" class="morePadding" href="/">Início</a></li>
                      <li><a v-on:click="activeMenu" href="#noticias">Noticias</a></li>
                      <li><a v-on:click="activeMenu" class="morePadding" href="#about">Sobre</a></li>
                      <li><a v-on:click="activeMenu" href="#ofertas">Ofertas</a></li>
                      <li><a v-on:click="activeMenu" href="#contato">Contato</a></li>
                  </ul>
              </nav>
            
     </div> 
  </header>
 
  <!--Modal-->
    <div>
      <b-modal id="modal-1" hide-footer title="Login" >
          <form>
            <div class="form-group">
              <label>E-mail:</label>
              <input class="form-control" placeholder="Digite seu e-mail.." type="text">             
            </div>

            <div class="form-group">
              <label>Senha:</label>
              <input class="form-control" placeholder="Digite sua senha.." type="password">             
            </div>   

            <div class="row">
              <div class="d-flex justify-content-center col-12">
                <button class="btn btn-secondary mt-2 mb-4">Entrar</button>                
              </div>  
            </div>  
          </form>    
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name:"header",
  data(){
    return{
      MenuActive: false
    }
  },
  methods:{
    activeMenu: function(){
      this.MenuActive = !this.MenuActive
    }
  },

}
</script>

<style>
.button-menu{
  width:50px;
  height: 50px;
  background-color: rgba(66, 1, 66, 0.973);
  position: fixed;
  right: 15px;
  top: 15px;
  background-image: url('/imagens/menu.png');
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 500;
  cursor: pointer;
  box-shadow: 3px 2px 2px 2px rgba(129, 0, 129, 0.123);
  transition: all 0.3s ease 0.2s;
  display: none;
  border:1px solid rgba(255,255,255,0.3);
}
.button-menu.active{
  background-color: rgba(192, 13, 192, 0.973);
  background-image: url('/imagens/close.png');
}
a{text-decoration: none;}
.mobile_menu{
  display: none;
  position: fixed;
  right: -70%;
  width: 70%;
  background-color: #000;
  height: 100%;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin:0px auto;
  transition: all 0.3s;
}

.mobile_menu.active{
  
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0,0.5);
  right: 0;
}
.mobile_menu li {
  margin:20px auto;
  text-align: center;
}
.mobile_menu ul{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.mobile_menu a{
  text-decoration: none;
  color:rgb(255, 118, 255);
  padding:7px 30px;
  background-color:rgba(0,0,0,0.8);
  box-shadow:2px 5px 10px 5px rgba(0,0,0,0.5);
  transition: 0.5s ease-in-out;
}
.mobile_menu a:hover{
  color:rgb(255, 255, 255);
  background-color: rgb(61, 3, 42);
  text-decoration: none;
  opacity: 0.8;
}
a.morePadding{
  padding: 7px 41px;
}
.desktop_menu{
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 72px;
  padding:8px 20px;
  background: rgb(16, 0, 29);
  box-shadow: 4px 6px 7px 5px rgba(3, 0, 3, 0.5);
  z-index: 800;
  position: relative;
}
.logo img{
  margin-left: 30px;
  width:140px;
  height: 75px;
}
.desktop_menu nav ul{
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  top:6px;
  justify-self: center;
}
.desktop_menu nav ul a{
  padding:9px 45px;
  font-size: 20px;
  margin:0 5px;
  color:#fff;
  background:rgba(3, 0, 3, 0.5);
  box-shadow: 2px 5px 7px 8px rgba(3, 0, 3, 0.2);
  text-decoration: none;
}
.desktop_menu nav ul a:hover{
  
  background:linear-gradient(30deg,rgba(66, 1, 66, 0.973),rgba(0,0,0,0.3),rgba(66, 1, 66, 0.973));
}

ul{
  list-style: none;
}

@media (max-width:1000px){

.desktop_menu nav ul a{
  padding:9px 30px;

}
}

@media (max-width:870px){
  .desktop_menu {
    display: none;
  }
  .mobile_menu{
    display: block;
  }
  .button-menu{
    display: block;
  }
}

@media (min-width:801px){
  .mobile_menu{
    display: none;
  }
}

</style>