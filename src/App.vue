<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default { 

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
  width:16px;
}
html::-webkit-scrollbar-track{
    background: rgb(32, 32, 32);
}
html::-webkit-scrollbar-thumb{
  background: rebeccapurple;
}
*::selection{
    background: rgb(150, 81, 219);
}
body{
  overflow-x: hidden;
}

          .titulo{
                  margin:0 auto;
                  font-size: 32px;
                  font-weight: lighter;
                  padding:40px 0;
                  color:#fff;
                  width: 300px;
                  text-transform: uppercase;
              }

            .titulo::after{
                content: '';
                display: block;
                width:80px;
                height: 4px;
                background-color: blueviolet;
                transition: all ease 0.3s;
            }
            @media(min-width: 600px){
            .titulo:hover::after{
                 width:200px;
                 }
            }
            @media(max-width: 600px) {
                   .titulo{
                  font-size: 28px;
                  padding:25px 0;
                  width: 80%;
                  text-align: center;
                  text-transform: uppercase;
              }

            .titulo::after{
              margin: 10px 0px;
              text-align: center;
                content: '';
                display:block;
                width:100%;
                height: 2px;
                background-color: blueviolet;
                transition: all ease 0.3s;
            }
            }


</style>