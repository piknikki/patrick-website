<template>
  <div>
    <h1 id="title"><span class="title">COMPLETE FORKLIFT</span></h1>
    <br>
    <About />
    <br>
    <Inventory />
    <br>
    <Contact />
  </div>
</template>

<script>
import About from '@/components/About'
import Inventory from '@/components/Inventory'
import Contact from '@/components/Contact'

export default {
  name: 'Welcome',
  components: {
    About,
    Inventory,
    Contact
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#title {
  padding: 3%;
}
</style>
