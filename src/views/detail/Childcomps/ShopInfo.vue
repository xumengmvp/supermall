<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length != 0">
    <div class="shop-detail">
      <img :src="shopInfo.shopLogo" alt="logo">
      <div class="shop-name">{{shopInfo.shopName}}</div>
    </div>
    <div class="shop-message">
      <div class="all-sell">
        <p>{{shopInfo.sell}}</p>
        <p>总销量</p>
      </div>

      <div class="all-goods">
        <p>{{shopInfo.goods}}</p>
        <p>全部宝贝</p>
      </div>

      <div class="comment">
        <p v-for="item in shopInfo.score" :key="item.name">
          <span>{{item.name}}</span>
          <span class="score">{{item.score}}</span>
          <span :class="[{better: item.isBetter},{notBetter: !item.isBetter}]">
            {{item.isBetter ? '高' : '低'}}
          </span>
        </p>
      </div>
    </div>
    <div class="welcome">
      <div>进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.shop-info {
  padding: 0 10px;
}
.shop-detail {
  height: 60px;
  display: flex;
  margin-top: 30px;
  font-size: 16px;
}
.shop-name {
  line-height: 60px;
  flex-grow: 1;
  padding-left: 10px;
}
.shop-message {
  display:flex;
  margin-top: 20px;
}
.shop-message > div {
  flex-grow: 1;
}
.all-sell p,.all-goods p{
  text-align: center;
}
.all-sell p:first-child,.all-goods p:first-child {
  margin-bottom: 10px;
  font-size: 18px;
}
.all-goods {
  border-right: 2px solid #eee8e8;
}
.all-sell,.all-goods {
  padding-top: 6px;
}
.comment {
  padding-left: 25px;
}
.comment p {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
}
.score {
  width:30px;
  text-align: left;
}
.notBetter {
  background-color: greenyellow;
  color: white;
}
.better {
  color: white;
  background-color: rgb(241, 62, 58);
}
.welcome {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
.welcome div {
  line-height: 30px;
  padding: 0 40px;
  background-color: #e0dede;
  border-radius: 5px;
}
</style>