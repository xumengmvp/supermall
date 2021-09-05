<template>
  <div class="detail-bottom-bar">
    <div>
      <div class="service"></div>
      <span>客服</span>
    </div>
    <div>
      <div class="shop"></div>
      <span>店铺</span>
    </div>
    <div>
      <div class="save"></div>
      <span>收藏</span>
    </div>
    <div class="addcart" @click="addCart">
      <div>加入购物车</div>
    </div>
    <div class="purchase">
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style>
.detail-bottom-bar {
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.detail-bottom-bar>div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.detail-bottom-bar .service {
  width: 30px;
  height: 30px;
  background-image: url('~assets/img/detail/detail_bottom.png');
  background-repeat: no-repeat;
  background-position: 0px -71px;
  background-size: 30px;
}
.detail-bottom-bar .shop {
  width: 30px;
  height: 30px;
  background-image: url('~assets/img/detail/detail_bottom.png');
  background-repeat: no-repeat;
  background-position: 0px -134px;
  background-size: 30px;
}
.detail-bottom-bar .save {
  width: 30px;
  height: 30px;
  background-image: url('~assets/img/detail/detail_bottom.png');
  background-repeat: no-repeat;
  background-position: 0px 1px;
  background-size: 30px;
}
.detail-bottom-bar .addcart {
  background-color: #FFDD10;
}
.detail-bottom-bar .purchase {
  background-color: var(--color-tint);
  padding: 0 20px;
}
</style>