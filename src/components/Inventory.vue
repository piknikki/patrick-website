<template>
  <div id="inventory">
    <h1 class="title">Our Inventory</h1>
    <article v-for="item in items" :key="item.item_id" >
      <ViewItem :item="item"></ViewItem>
    </article>
  </div>
</template>

<script>
import db from './firebaseInit'
import ViewItem from '@/components/ViewItem'

export default {
  name: 'inventory',
  components: { ViewItem },
  data () {
    return {
      items: [],
      isActive: false
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

<style >
#inventory {
  padding: 3%;
}

</style>
