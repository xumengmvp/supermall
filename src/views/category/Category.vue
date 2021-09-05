<template>
  <div class="category">
    <category-nav-bar/>
    <back-top v-show="isScroll" @click.native="toBackTop"/>
    <div class="category-type">
      <better-scroll 
        class="category-scroll-list"
        :useObserveDom = "true"
        :useObserveImage = "true">
        <category-list :category="category" @clickItem="clickItem"/>
      </better-scroll>
      <better-scroll 
        class="category-scroll-goods"
        :useObserveDom = "true"
        :useObserveImage = "true"
        :probeTypeNumber = "3"
        ref = 'betterScroll'
        @bscroll = "bscroll">
        <subcategory :subcategory="showSubcategory"/>
        <tab-control :titles="titles" @clickListener="switchData"/>
        <goods :goods="showGoods"/>
      </better-scroll>
    </div>
  </div>
</template>

<script>
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from 'network/category'

import BetterScroll from 'components/common/bscroll/BetterScroll'

import CategoryNavBar from './Childcomps/CategoryNavBar'
import CategoryList from './Childcomps/CategoryList'
import Subcategory from './Childcomps/Subcategory'
import Goods from 'components/content/goods/Goods'

import {
  tabcontrol,
  backTop
} from 'common/mixin'


export default {
  components: {
    CategoryNavBar,
    CategoryList,
    BetterScroll,
    Subcategory,
    Goods
  },
  mixins: [tabcontrol,backTop],
  data() {
    return {
      category: [],
      categoryInfo: [],
      currentIndex: -1
    }
  },
  created() {
    /* 
      网络请求
    */
    getCategory().then(res => {
      this._getCategory(res)
    })

  },
  methods: {
    _getCategory(res) {
      this.category =  res.data.category.list
      for(let i=0;i<this.category.length;i++) {
        this.$set(this.categoryInfo,i,{
          subcategory: {},
          detail: {
            pop: [],
            new: [],
            sell: []
          }
        })
      }
      this._getSubcategory(0)
    },

    _getSubcategory(index) {
      this.currentIndex = index
      getSubcategory(this.category[index].maitKey).then(res => {
        this.$set(this.categoryInfo[index],'subcategory',res.data)
        this._getCategoryDetail('pop')
        this._getCategoryDetail('new')
        this._getCategoryDetail('sell')
      })
    },

    _getCategoryDetail(type) {
      getCategoryDetail(this.category[this.currentIndex].miniWallkey,type).then(res => {
        this.$set(this.categoryInfo[this.currentIndex].detail,type,res)
      })
    },

    clickItem(index) {
      this._getSubcategory(index)
    },

    bscroll(position) {
      this.showBackTop(position)
    }
  },
  computed: {
    showSubcategory() {
      if(this.currentIndex == -1) {
        return []
      }
      return this.categoryInfo[this.currentIndex].subcategory.list
    },
    showGoods() {
      if(this.currentIndex == -1){
        return []
      }
      return this.categoryInfo[this.currentIndex].detail[this.goodsType]
    }
  }
}

</script>

<style>
.category {
  height: 100vh;
}
.category-type {
  height: calc(100% - 44px - 49px);
  display: flex;
  background-color: #F7F5F7;
}
.category-scroll-list,.category-scroll-goods {
  height: 100%;
  overflow: hidden;
}
.category-scroll-goods {
  width: 85%;
  background-color: white;
}
.category-scroll-list {
  width: 25%;
}
.tabControl {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
}
</style>