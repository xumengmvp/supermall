<template>
  <nav-bar class="cart-nav-bar">
    <template v-slot:center>
      <div>购物车({{shoppingCartLength}})</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapGetters([
      'shoppingCartLength'
    ])
  }
}
</script>

<style>
.cart-nav-bar {
  background-color: var(--color-tint);
  font-weight: bold;
  color: white;
  font-size: 18px;
}
</style>