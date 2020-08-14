<template>
  <div>
    <h1 class="title">Our Inventory</h1>
    <article v-for="(item, index) in items" :key="index">
      <div class="message-header">
        <h1>{{ item.name }}</h1>
        <span class="tag is-medium is-pulled-right">
              <!--          <router-link-->
          <!--            v-bind:to="{name: 'view-item', params: {item_id: item.item_id}}"-->
          <!--          >-->
            <span id="icon" class="icon has-text-primary"><i class="fas fa-eye"></i></span>
          <!--          </router-link>-->
          </span>
      </div>
      <p class="message-body">
        Item Make/Model: {{ item.make }} | {{ item.model }}</p>
    </article>
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
          make: doc.data().make,
          model: doc.data().model,
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
