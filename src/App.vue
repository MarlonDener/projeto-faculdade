<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {Header} 

}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
html,body{
background:#111;
scroll-behavior: smooth;
}
html::-webkit-scrollbar{
  width:11px;
}
html::-webkit-scrollbar-track{
    background: rgb(32, 32, 32);
}
html::-webkit-scrollbar-thumb{
  background: rebeccapurple;
}

body{
  overflow-x: hidden;
}

          .titulo{
                  margin:0 auto;
                  font-size: 32px;
                  font-weight: lighter;
                  padding:30px 0;
                  color:#fff;
                  width: 200px;
              }

            .titulo::after{
                content: '';
                display: block;
                width:50px;
                height: 4px;
                background-color: blueviolet;
                transition: all ease 0.3s;
            }

            .titulo:hover::after{
                 width:140px;
            }


</style>