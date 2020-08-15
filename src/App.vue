<template>
  <div id="app" class="container is-fluid">
    <img id="logo" alt="Complete Forklift logo" src="./assets/logo.png">
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

#logo {
  width: 200px;
}
</style>
