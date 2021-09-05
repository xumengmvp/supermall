<template>
  <div class="cart-bottom-bar">
    <div class="cart-bottom-left">
      
      <check-button :checkState="isAllCheck" @click.native="allCheck(isAllCheck)"/>
      <span>全选</span>
      <span class="calculate">合计:{{calculatePrice.toFixed(2)}}</span>
    </div>
    <div class="cart-bottom-right">
      <span @click="goBuy">去计算({{checkedLength}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters([
      'calculatePrice',
      'checkedLength',
      'isAllCheck'
    ])
  },
  methods: {
    allCheck(isAllCheck) {
      this.$store.commit('updateAllCheckState',isAllCheck)
    },
    goBuy() {
      if(!this.checkedLength) {
        this.$toast.show('请选择商品',1500)
      }
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  height: 49px;
  display: flex;
  justify-content: space-between;
  line-height: 49px;
  background-color: #ecebed;
}
.cart-bottom-left {
  display: flex;
  padding: 0 20px;
  align-items: center;
}
.cart-bottom-right {
  padding:0 20px;
  background-color: var(--color-tint);
}
.calculate {
  margin-left: 10px;
}
</style>