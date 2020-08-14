<template>
  <div>
    <h1 class="title">Our Inventory</h1>
    <ViewItem />
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
  methods: {
    isActiveToggle () {
      this.isActive = !this.isActive
      return this.isActive
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
