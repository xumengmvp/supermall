<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length != 0">
    <p class="title">
      {{goodsInfo.title}}
    </p>
    <p>
      <span class="price">{{goodsInfo.price}}</span>
      <span class="old-price">
        <del>{{goodsInfo.oldPrice}}</del>
      </span>
      <span :style="{background: goodsInfo.bgColor}" class="discount">
        {{goodsInfo.discount}}
      </span>
    </p>
    <p class="services-message">
      <span>{{ goodsInfo.columns[0]}}</span>
      <span>{{ goodsInfo.columns[1]}}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length -1].name}}</span>
    </p>
    <p class="delivery">
      <span v-for="index in goodsInfo.services.length -1" :key="index" class="item">
        <img :src="goodsInfo.services[index - 1].icon" alt="">
        <span>{{goodsInfo.services[index - 1].name}}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-info {
  font-size: 18px;
  line-height: 26px;
}
.title {
  padding: 0 6px;
  font-weight: bold;
  margin-bottom: 8px;
}
.price {
  padding:0 6px;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-tint);
}
.old-price {
  color: gray;
}
.discount {
  line-height: 22px;
  font-size: 14px;
  color: white;
  padding: 0 5px;
  display: inline-block;
  border-radius: 5px;
  position: relative;
  top: -10px;
  left: 8px;
}
.price {
  margin-right: 10px;
}
.services-message {
  height: 40px;
  font-size: 16px;
  display: flex;
  line-height: 40px;
  justify-content: space-between;
  padding: 0 6px;
  color: #BEBEBE;
  box-shadow: 0px 1px 2px 0px #bebebe;
}
.delivery {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  box-shadow: 0px 1px 2px 0px #bebebe;
}
.delivery .item {
  display:flex;
  height: 50px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.delivery img{
  width: 20px;
  height:20px;
  display: block;
}
</style>