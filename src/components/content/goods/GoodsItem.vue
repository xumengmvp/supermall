<template>
  <div class="goods-item">
    <img v-lazy="showImage" alt="image">
    <p>{{goodsItem.title}}</p>
    <p>
      <span class="goods-price">{{goodsItem.price}}</span>
      <span class="goods-collect">{{goodsItem.cfav}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.show ? this.goodsItem.show.img : this.goodsItem.img ? this.goodsItem.img : this.goodsItem.image
    }
  }
}
</script>

<style>
.goods-item {
  width: 49%;
  overflow: hidden;
}
.goods-item img {
  width: 100%;
  border-radius: 8px;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.goods-price {
  color: #FF8198;
}
.goods-collect {
  position: relative;
  margin-left:20px;
}
.goods-collect::before {
  content: '';
  position: absolute;
  top: 0px;
  left: -15px;
  width: 16px;
  height: 16px;
  display: block;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>