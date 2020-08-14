<template>
  <div>
    <h1>Our Inventory</h1>
    <ul v-for="(item, index) in items" :key="index">
      <li>{{ item.item_id }} | {{ item.name }} | {{ item.price }}</li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'inventory',
  data () {
    return {
      items: []
    }
  },
  created () {
    db.collection('items').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          item_id: doc.data().item_id,
          name: doc.data().name,
          color: doc.data().color,
          price: doc.data().price
        }
        console.log(data)
        this.items.push(data)
      })
    })
  }
}
</script>

<style scoped>

</style>
