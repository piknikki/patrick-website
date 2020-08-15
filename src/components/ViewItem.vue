<template>
    <article>
      <div class="message-header">
        <h1>{{ item.name }}</h1>
        <span class="tag is-medium is-pulled-right">
          <button @click="isActiveToggle" v-bind:to="{name: 'view-item', params: {item_id: item_id}}">
            <span id="icon" class="icon has-text-primary"><i class="fas fa-eye"></i></span>
          </button>
          </span>
      </div>

      <div id="info-box" class="box" v-show="isActive">
        <div class="columns is-centered is-vcentered">
          <div class="column">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="column">
            <div>
              {{ item.make }} | {{ item.model }}
              <br>
              hours: {{ item.hours }}
              <br>
              <p class="has-text-left">
                Description of the piece of equipment goes here. Lorem ipsum dolor. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <a class="level-item" aria-label="reply" href="tel: 303-990-1115">
                  Interested in this item? Call us!
                  <span class="icon is-small phone-icon" >
                   <i class="fas fa-phone" ></i>
                </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
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
      price: null,
      hours: null
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
            vm.hours = doc.data().hours
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

#info-box {
  margin: 20px;
}

.phone-icon {
  padding: 0 20px ;
}

</style>
