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
}
html,body{
background:#111;
scroll-behavior: smooth;
}
html::-webkit-scrollbar{
  width:16px;
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
</style>