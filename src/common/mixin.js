import BackTop from 'components/content/backtop/BackTop'
import TabControl from 'components/content/tabcontrol/TabControl'

export const backTop = {
  components: {
    BackTop
  },
  data() {
    return {
      isScroll: false
    }
  },
  methods: {
    showBackTop(position) {
      //控制backtop的显示
      this.isScroll = position.y < -1000
    },
    toBackTop() {
      //回到顶部
      this.$refs.betterScroll.scrollTo(0,0,1000)
    }
  }
}

export const tabcontrol = {
  components: {
    TabControl
  },
  data() {
    return {
      titles: ['流行','新款','精选'],
      goodsType: 'pop',
      isShow: true
    }
  },
  methods: {
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
    }
  }
}