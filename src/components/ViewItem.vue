<template>
  <div>
    <article>
      <div class="message-header">
        <h1>{{ name }}</h1>
        <span class="tag is-medium is-pulled-right">
              <!--          <router-link-->
          <!--            v-bind:to="{name: 'view-item', params: {item_id: item.item_id}}"-->
          <!--          >-->
          <button @click="isActiveToggle" v-bind:to="{name: 'view-item', params: {item_id: item_id}}">
            <span id="icon" class="icon has-text-primary"><i class="fas fa-eye"></i></span>
          </button>
          <!--          </router-link>-->
          </span>
      </div>
      <p class="message-body" v-show="isActive">
        Item Make/Model: {{ make }} | {{ model }}</p>
    </article>
  </div>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'view-item',
  isActive: false,
  data () {
    return {
      make: null,
      model: null,
      item_id: null,
      name: null,
      color: null,
      price: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('items')
      .where('item_id', '==', to.params.item_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.item_id = doc.data().item_id
            vm.make = doc.data().make
            vm.model = doc.data().model
            vm.name = doc.data().name
            vm.price = doc.data().price
          })
        })
      })
  },
  watch: {
    $route: 'fetchData'
  }
}
</script>

<style scoped>

</style>
