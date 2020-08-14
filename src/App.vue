<template>
  <div id="app" class="container is-fluid">
    <img alt="Vue logo" src="./assets/logo.png">
    <Welcome />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Welcome from '@/components/Welcome'

export default {
  name: 'App',
  components: {
    Welcome,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #edebeb;
  color: #2c3e50;
  margin-top: 60px;

}

html {
  background-color: #edebeb;
}
</style>
