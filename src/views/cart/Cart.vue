<template>
  <div class="cart">
    <cart-nav-bar/>
    <better-scroll 
      :useObserveDom = "true"
      :useObserveImage = "true"
      class="cart-scroll"
      ref="scroll">
      <cart-list :shoppingCart="shoppingCart"/>
    </better-scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import BetterScroll from 'components/common/bscroll/BetterScroll'

import CartNavBar from './Childcomps/CartNavBar'
import CartList from './Childcomps/CartList'
import CartBottomBar from './Childcomps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  components: {
    CartNavBar,
    CartList,
    BetterScroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
      'shoppingCart'
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style>
.cart {
  height: 100vh;
}
.cart-scroll {
  height: calc(100% - 44px - 49px - 49px);
  overflow: hidden;
}
</style>