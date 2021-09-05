<template>
  <div class="list-item">
    <div class="cart-check">
      <check-button 
        :checkState="item.checked" 
        @click.native="checkButton"/>
    </div>
    <div class="cart-image">
      <img :src="item.image" alt="image">
    </div>
    <div class="cart-desc">
      <p>{{item.desc}}</p>
      <p>{{item.desc}}</p>
      <p>
        <span>￥ {{item.price}}</span>
        <span>× {{item.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
  data() {
    return {
      isCheck: false
    }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkButton() {
      this.item.checked = !this.item.checked
      this.$store.dispatch('findIndex',{
        iid: this.item.iid,
        checkState: this.item.checked
      })
    }
  }
}
</script>

<style>
.list-item {
  height: 120px;
  display: flex;
  padding: 0 6px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid #cfcdcd;
  border-top: 1px solid #cfcdcd;
}
.cart-image img {
  width: 90px;
  height: 100px;
  border-radius: 8px;
}
.cart-desc {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-desc>p {
  padding: 0 10px;
  width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cart-desc>p:nth-child(2) {
  font-size: 14px;
}
.cart-desc p:last-child {
  display: flex;
  justify-content: space-between;
}
</style>