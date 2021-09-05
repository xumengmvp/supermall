<template>
  <tab-bar>
    <tab-bar-item path='/home' fontcolor="#DD2D50">

      <template v-slot:active>
        <img src="~assets/img/tabbar/index_focus.png" alt="">
      </template>

      <template v-slot:notactive>
        <img src="~assets/img/tabbar/index.png" alt="">
      </template>

      <template v-slot:font>
        <span>首页</span>
      </template>

    </tab-bar-item>

    <tab-bar-item path='/category' fontcolor="#DD2D50">

      <template v-slot:active>
        <img src="~assets/img/tabbar/productType_focus.png" alt="">
      </template>

      <template v-slot:notactive>
        <img src="~assets/img/tabbar/productType.png" alt="">
      </template>

      <template v-slot:font>
        <span>分类</span>
      </template>

    </tab-bar-item>
      
    <tab-bar-item path='/cart' fontcolor="#DD2D50">

      <template v-slot:active>
        <img src="~assets/img/tabbar/shop_focus.png" alt="">
      </template>

      <template v-slot:notactive>
        <img src="~assets/img/tabbar/shop.png" alt="">
      </template>

      <template v-slot:font>
        <span>购物车</span>
      </template>

    </tab-bar-item>

    <tab-bar-item path='/profile' fontcolor="#DD2D50">

      <template v-slot:active>
        <img src="~assets/img/tabbar/personal_focus.png" alt="">
      </template>

      <template v-slot:notactive>
        <img src="~assets/img/tabbar/personal.png" alt="">
      </template>

      <template v-slot:font>
        <span>我的</span>
      </template>

    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>