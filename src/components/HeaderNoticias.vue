<template>
  <div>
    <header>
      <div class="desktop_menu">
        <div class="logo"><a href="/"><img src="/imagens/logot.png" /></a></div>
        <div class="gamesclub">GamesClub</div>
        <div>
          <nav class="inicio">
            <ul>
            <li><a href="/">Inicio</a></li>
            </ul>
          </nav>
      </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "HeaderNoticias",
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
};
</script>

<style scoped>

.button-menu {
  width: 54px;
  height: 50px;
  background-color: rgba(114, 5, 99, 0.973);
  background-image: url("/imagens/menu.png");
  background-size: 50% 50%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 500;
  cursor: pointer;
  box-shadow: 3px 2px 2px 2px rgba(129, 0, 129, 0.123);
  transition: all 0.3s ease 0.2s;
  display: none;
  border-radius: 4px;
  position:static;
  z-index: 100;
}
.button-menu:hover{
  background-color: rgba(83, 4, 73, 0.973);
}
.button-menu.active {
  background-color: rgba(192, 13, 192, 0.973);
  background-image: url("/imagens/close.png");
}
a {
  text-decoration: none;
}
.mobile_menu {
  top:70px;
  display: none;
  right: -70%;
  width: 70%;
  background-color: #000;
  height: 30%;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0px auto;
  transition: all 0.3s;
  position: absolute;
  
}

.mobile_menu.active {
  box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.5);
  right: 0;
}
.mobile_menu li {
  margin: 20px auto;
  text-align: center;
}
.mobile_menu ul {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.mobile_menu a {
  text-decoration: none;
  color: rgb(255, 118, 255);
  padding: 7px 30px;
  background-color: rgba(0, 0, 3, 0.3);
  transition: 0.5s ease-in-out;
}
.mobile_menu a:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(61, 3, 42);
  text-decoration: none;
  opacity: 0.8;
}
a.morePadding {
  padding: 7px 41px;
}
.desktop_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  padding: 14px 20px;
  background: rgb(7, 0, 12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 6px 7px 5px rgba(95, 95, 95, 0.075);
  position: relative;
  z-index: 2;
}
.logo img {
  margin-left: 30px;
  width: 140px;
  height: 75px;
  transition: 0.2s all ease-in-out;
}
.logo img:hover{
  opacity: 0.8;
}
.desktop_menu nav ul {
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  top: 6px;
  justify-self: center;
}
.desktop_menu nav ul a {
  padding: 15px 45px;
  font-size: 20px;
  margin: 0 5px;
  color: #fff;
  background: rgba(3, 0, 3, 0.5);
  box-shadow: 2px 5px 7px 8px rgba(3, 0, 3, 0.2);
  text-decoration: none;
}

.gamesclub{
    font-family: 'Train One', cursive;
    font-size: 45px;
    color:#fff;
}

ul {
  list-style: none;
}

@media (max-width:900px){
  .desktop_menu nav ul a{
    font-size: 15px;
  }
.gamesclub{
    font-family: 'Train One', cursive;
    font-size: 40px;
    position: relative;
    color:#fff;
}
.logo img {
  margin-left: 0px;

}
@media (max-width:650px){
  .gamesclub{
    display: none;
}
.logo img{
  width:100px;
  height: 70px;
}
}
}
</style>