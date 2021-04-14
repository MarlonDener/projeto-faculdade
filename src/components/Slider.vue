 <template>
  <hooper class="hooper">
    <slide>
      <div class="imagem">
        <img src="/imagens/img1.jpeg">
      </div>
    </slide>
    <slide>
       <div class="imagem">
       <img src="/imagens/img2.jpeg">
       </div>
    </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
    
  }
};
</script>

<style scoped>
  slide{
    background-size:100% 100%;

  }
  body{
    height: 100%;
  }
  .imagem{
    height: 60vh;
     width: 100%;
  }
  .imagem img{
    width: 100%;
    height: 100%;

  }
  .hooper{
    width: 100%;
    height: 60vh;
  }
  hooper-pagination{
    outline: none;
    border:none;
  }
</style>