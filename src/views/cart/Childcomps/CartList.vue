<template>
  <div class="cart-list">
    <cart-list-item 
      v-for="(item,index) in shoppingCart" :key="index" :item="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
  props: {
    shoppingCart: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartListItem
  }
}
</script>

<style>

</style>