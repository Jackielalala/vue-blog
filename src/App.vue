<template>
  <div id="app">
    <Header id='header'></Header>
    <main id='main'>
      <router-view/>
    </main>
    <Footer id='footer'></Footer>
  </div>
</template>


<script>

import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/common.css';
#app {
  height:100%;
  display:grid;
  grid-template-rows:auto 1fr auto;
  grid-template-columns:12% auto 12%;
  grid-template-areas:'header header header'
                      '. main . '
                      'footer footer footer'
}
#header {
  grid-area:header;
  padding:5px 20px;
}
#footer {
  grid-area:footer;
  padding:5px 20px;
}
#main {
  grid-area:main;
  padding:10px 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
