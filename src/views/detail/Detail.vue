<template>
  <div class="detail">
    <detail-nav-bar :titles="titles" class="detail-nav-bar" @clickNavBar="clickNavBar" ref="navbar"/>
    <better-scroll 
      :useObserveDom = "true"
      :useObserveImage = "true"
      class = "bscroll"
      ref = "betterScroll"
      :probeTypeNumber = "3"
      @bscroll = "bscroll">
      <detail-swiper :top-swiper="topSwiper"/>
      <goods-info :goods-info="goodsInfo"/>
      <shop-info :shop-info="shopInfo"/>
      <detail-info :detail-info="detailInfo"            
          @loadDetailImage="loadDetailImage"/>
      <params-info :params-info="paramsInfo" ref="paramsInfo"/>
      <comment-info :comment-info="commentInfo" ref="commentInfo"/>
      <recommend-goods :recommend="recommend" ref="recommendInfo"/>
    </better-scroll>
    <back-top @click.native="toBackTop" v-show="isScroll"/>
    <detail-bottom-bar @addCart="addCart"/>
    <!-- <toast :message="toastMessage" v-show="isShowToast"/> -->
  </div>
</template>

<script>
//防抖函数
import {debounce} from 'common/utils'

import BetterScroll from 'components/common/bscroll/BetterScroll'
// import Toast from 'components/common/toast/Toast'

import DetailNavBar from './Childcomps/DetailNavBar'
import DetailSwiper from './Childcomps/DetailSwiper'
import GoodsInfo from './Childcomps/GoodsInfo'
import ShopInfo from './Childcomps/ShopInfo'
import DetailInfo from './Childcomps/DetailInfo'
import ParamsInfo from './Childcomps/ParamsInfo'
import CommentInfo from './Childcomps/CommentInfo'
import RecommendGoods from './Childcomps/RecommendGoods'
import DetailBottomBar from './Childcomps/DetailBottomBar'


//混入
import {backTop} from 'common/mixin'

import {
  getDetailData,
  getRecommend, 
  goodsInfo,
  shopInfo,
  detailInfo,
  paramsInfo
} from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    BetterScroll,
    DetailInfo,
    ParamsInfo,
    CommentInfo,
    RecommendGoods,
    DetailBottomBar,
    // Toast
  },
  mixins: [backTop],
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      iid: null,
      response: null,
      topSwiper: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommend: [],
      titleTopY: [],
      getTitleTopY: null,
      currentIndex: 0,
      // toastMessage: '',
      // isShowToast: false
    }
  },
  created() {
    /* 
      保存iid
     */
    this.iid = this.$route.params.iid

    /* 
      网络请求
    */
    getDetailData(this.iid).then(res => {
      //保存数据
      this.response = res.result

      const data = res.result

      //获取轮播图片
      this.topSwiper = data.itemInfo.topImages

      //获取商品信息
      this.goodsInfo = new goodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )

      //获取店铺信息
      this.shopInfo = new shopInfo(
        data.shopInfo.cGoods,
        data.shopInfo.cSells,
        data.shopInfo.name,
        data.shopInfo.score,
        data.shopInfo.shopLogo
      )
      
      //获取详情信息
      this.detailInfo = new detailInfo(
        data.detailInfo.desc,
        data.detailInfo.detailImage[0].key,
        data.detailInfo.detailImage[0].list,
      )

      //获取参数信息
      this.paramsInfo = new paramsInfo(
        data.itemParams.info.set,
        data.itemParams.rule.tables[0]
      )

      //获取评论信息
      if(data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0]
      }

    })

    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mounted() {

    this.getTitleTopY = debounce(() => {
      this.titleTopY = []
      this.titleTopY.push(0)
      this.titleTopY.push(this.$refs.paramsInfo.$el.offsetTop)
      this.titleTopY.push(this.$refs.commentInfo.$el.offsetTop)
      this.titleTopY.push(this.$refs.recommendInfo.$el.offsetTop)
    },500)


  },
  methods: {
    clickNavBar(index) {
      this.$refs.betterScroll.scrollTo(0,-this.titleTopY[index],1000)
    },
    loadDetailImage() {
      this.getTitleTopY()
    },
    bscroll(position) {
      let topY = -position.y
      for(let i = 0;i < this.titleTopY.length;i++) {
        if((this.currentIndex != i
              && i < this.titleTopY.length-1 
                && topY >= this.titleTopY[i] 
                  && topY < this.titleTopY[i+1]) 
            
            ||

            (this.currentIndex != i
              && i === this.titleTopY.length -1
                && topY >= this.titleTopY[i])
              ) {

            this.currentIndex = i
            this.$refs.navbar.currentIndex = i
        }
      }
      this.showBackTop(position)
    },
    addCart() {
      let product = {}
      product.iid = this.iid
      product.image = this.response.itemInfo.topImages[0]
      product.price = this.response.itemInfo.lowNowPrice
      product.desc = this.response.itemInfo.title
      product.count = 1
      product.checked = true
      this.$store.dispatch('addCart',product).then(res => {
       /*  this.toastMessage = res
        this.isShowToast = true
        setTimeout(() => {
          this.isShowToast = false
        },1500) */

        this.$toast.show()
      })
    }
  }
}
</script>

<style>
.detail {
  height: 100vh;
  position: relative;
  background-color: white;
  z-index: 3;
}
.bscroll {
 position: absolute;
 top: 44px;
 bottom: 60px;
 left: 0;
 right: 0;
 overflow: hidden;
}
.detail-nav-bar {
  position: relative;
  z-index: 1;
  background-color: white;
}
</style>