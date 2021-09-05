<template>
  <div id="home">
    <home-nav-bar/>
    <tab-control :titles="title"
      @clickListener="switchData" 
      ref="tabControl1" class="tabControl" v-show="isShow"/>
    <better-scroll 
      class = "wrapper" 
      :probeTypeNumber = "3" 
      @bscroll = "bscroll"
      ref = "betterScroll"
      :usePullUpLoad = "true"
      @pullingUp = "loadMore"
      :useObserveDom = "true"
      :useObserveImage = "true">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend :recommends="recommends"/>
      <home-popular/>
      <tab-control :titles="title"
        @clickListener="switchData" 
        ref="tabControl2"/>
      <goods :goods="showTypes"/>
    </better-scroll>
    <back-top v-show="isScroll" @click.native="toBackTop"/>
  </div>
</template>

<script>
import HomeNavBar from './Childcomps/HomeNavBar'
import HomeSwiper from './Childcomps/HomeSwiper'
import HomeRecommend from './Childcomps/HomeRecommend'
import HomePopular from './Childcomps/HomePopular'

import TabControl from 'components/content/tabcontrol/TabControl'
import Goods from 'components/content/goods/Goods'
import BetterScroll from 'components/common/bscroll/BetterScroll'


import {getHomeMultiData,getHomeProducts} from 'network/home' 


//混入mixins

import {backTop} from 'common/mixin'

export default {
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    Goods,
    BetterScroll,
  },
  mixins: [backTop],
  data() {
    return {
      banners: [],
      recommends: [],
      title: ['流行', '新款', '精选'],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      goodsType: 'pop',
      offsetHeight: 0,
      isShow: false,
      scrollY: 0
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultiData()

    //请求流行，新款，精选商品信息
    this.getHomeProducts('pop')
    
    this.getHomeProducts('new')
    
    this.getHomeProducts('sell')
  },
  mounted() {

  },
  methods: {
    /* 
      事件相关
    */
    switchData(index) {
      //对TabControl的点击监听
      switch (index){
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    bscroll(position) {
      this.showBackTop(position)
      this.showTabControl(position)
    },
    showTabControl(position) {
      //控制tabcontrol的显示
      this.isShow = -position.y > this.offsetHeight ? true : false
    },
    loadMore() {
      this.getHomeProducts(this.goodsType)
      this.$refs.betterScroll.finishPullUp()
    },
    swiperImageLoad() {
      this.offsetHeight = this.$refs.tabControl2.$el.offsetTop
    },
    /* 
      
      网络请求相关
  
    */
    getHomeMultiData() {
      //获取swiper图片
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeProducts(type) {
      //获取首页商品列表
      const page = this.goods[type].page + 1
      getHomeProducts(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }

  },
  computed: {
    showTypes() {
      return this.goods[this.goodsType].list
    }
  },
  activated() {
    this.$refs.betterScroll.scrollTo(0,this.scrollY,1)
    this.$refs.betterScroll.refresh()
  },
  deactivated() {
    this.scrollY = this.$refs.betterScroll.getScrollY()
  }

}
</script>

<style>
#home {
  height: 100vh;
  position: relative;
  /* padding-top: 44px; */
}
.wrapper {
  /* height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tabControl {
  position: fixed;
  top: 43px;
  left: 0;
  right: 0;
  z-index: 2;
}
</style>