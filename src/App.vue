<template>
  <div id="app" class="container is-fluid">
    <img alt="Vue logo" src="./assets/logo.png">
    <Welcome msg="Welcome to COMPLETE FORKLIFT"/>
    <About />
    <Inventory />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import About from '@/components/About'
import Inventory from '@/components/Inventory'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Welcome,
    About,
    Contact,
    Inventory,
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
