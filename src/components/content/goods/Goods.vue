<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="index" :goods-item="item" @click.native="goodsItemClick(item.iid)"/>    
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
  props: {
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsItem
  },
  methods: {
    goodsItemClick(iid) {
      this.$router.push('/detail/' + iid)
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  padding: 14px 10px 0px 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>