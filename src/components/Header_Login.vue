<template>
  <div>
    <header>
      <div class="desktop_menu">
        <div class="logo"><img src="/imagens/logot.png" /></div>
        <nav>
          <ul>
            <li><a href="/">Blog</a></li>
            <li><a href="#" @click="logout">Sair</a></li>
          </ul>
        </nav>
      </div>
      <div
        class="button-menu"
        :class="MenuActive ? 'active' : ''"
        v-on:click="activeMenu"
      ></div>
      <div class="mobile_menu" :class="MenuActive ? 'active' : ''">
        <nav>
          <ul>
            <li>
              <a v-on:click="activeMenu" class="morePadding" href="/">Início</a>
            </li>
            <li>
              <a v-on:click="activeMenu" @click="logout" class="morePadding" href="#">Sair</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!--Modal-->
    <div>
      <b-modal id="modal-1" hide-footer title="Login">
        <form>
          <div class="form-group">
            <label>E-mail:</label>
            <input
              class="form-control"
              placeholder="Digite seu e-mail.."
              type="text"
            />
          </div>

          <div class="form-group">
            <label>Senha:</label>
            <input
              class="form-control"
              placeholder="Digite sua senha.."
              type="password"
            />
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
import firebase from "firebase/app";
export default {
  name: "header_login",
  data() {
    return {
      MenuActive: false,
    };
  },
  methods: {
    activeMenu: function () {
      this.MenuActive = !this.MenuActive;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>

.button-menu{
  width:45px;
  height: 42px;
  background-color: rgba(2, 0, 2, 0.973);
  position: fixed;
  right: 20px;
  top: 15px;
  background-image: url('/imagens/menu.png');
  background-size: 40% 40%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 500;
  cursor: pointer;
  box-shadow: 5px 6px 7px 8px rgba(10, 0, 10, 0.123);
  transition: all 0.3s ease 0.2s;
  display: none;
}
.button-menu:hover{
  transform: scale(1.1);
}
.button-menu.active{
  right: 40px;
  top: 30px;
  transform: scale(1.3);
  background-color: rgb(116, 6, 88);
  background-image: url('/imagens/close.png');
  border: thin solid rgba(170, 8, 130, 0.5);
}
a{text-decoration: none;}
.mobile_menu{
  display: none;
  position: fixed;
  width: 100%;
  background-color: #000;
  height: 100%;
  z-index: 400;
  font-size: 28px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  align-items: center;
  justify-content: center;
  visibility: hidden;
}

.mobile_menu.active{
  visibility:visible;
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0,0.5);
  opacity: 1;
}

.mobile_menu ul{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.mobile_menu a{
  display: block;
  text-decoration: none!important;
  font-size: 24px;
  padding: 15px;;
  color: #fff;
  position: relative;
}
  .mobile_menu a::after {
      content: '';
      position: absolute;
      bottom: 0.70rem;
      left: 45%;
      width: 0%;
      height: 0.2rem;
      background: rgb(192, 23, 214);
      transition: all 300ms ease-in-out;
      text-decoration: none;
    }
    .mobile_menu a:hover::after {
      left: 15%;
      width: 70%;
    }
    .mobile_menu a:hover{
      color: #fff!important;
    }
.desktop_menu{
  display: flex;
  align-items: center;
  justify-content:space-around;
  height: 72px;
  padding:8px 20px;
  background: rgb(16, 0, 29);
  box-shadow: 4px 6px 7px 5px rgba(3, 0, 3, 0.5);
  z-index: 10;
  position: relative;
}
.logo img{
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
  margin: 0 10px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 20px;
  padding: 10px 17px;
  color: #fff;
  min-width:130px;
  position: relative;
  background: rgba(0, 0, 0, 0.288);
}
  .desktop_menu nav ul a::after {
      content: '';
      position: absolute;
      bottom: 0.70rem;
      left: 45%;
      width: 0%;
      height: 0.2rem;
      background: rgb(192, 23, 214);
      transition: all 300ms ease-in-out;
    }
    .desktop_menu nav ul a:hover::after {
      left: 15%;
      width: 70%;
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
    display: flex;
  }
  .button-menu{
    display: flex;
  }
}

@media (min-width:801px){
  .mobile_menu{
    display: none;
  }
}

</style>