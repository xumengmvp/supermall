<template>
  <div class="recommend">
    <goods :goods="recommend"/>
  </div>
</template>

<script>
import Goods from 'components/content/goods/Goods'

export default {
  components: {
    Goods
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
</style>