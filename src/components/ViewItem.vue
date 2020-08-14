<template>
    <article>
      <div class="message-header">
        <h1>{{ item.name }}</h1>
        <span class="tag is-medium is-pulled-right">
          <button @click="isActiveToggle" v-bind:to="{name: 'view-item', params: {item_id: item_id}}">
            <span id="icon" class="icon has-text-primary"><i class="fas fa-eye"></i></span>
          </button>
          <!--          </router-link>-->
          </span>
      </div>
      <p class="message-body" v-show="isActive">
        Item Make/Model: {{ make }} | {{ model }}</p>
    </article>
</template>

<script>
import db from './firebaseInit'

export default {
  name: 'view-item',
  props: ['item'],
  data () {
    return {
      isActive: false,
      make: null,
      model: null,
      item_id: null,
      name: null,
      color: null,
      price: null
    }
  },
  methods: {
    isActiveToggle () {
      this.isActive = !this.isActive
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
button {
  border: none;
  background-color: transparent;
}

tag {
  background-color: #FFFFFF;
}

.message-header {
  margin: 10px;
  border-radius: 4px;
}

</style>
