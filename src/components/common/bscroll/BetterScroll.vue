<template>
  <div id="bs-wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      bs: null
    }
  },
  props: {
    probeTypeNumber: {
      type: Number,
      default: 0
    },
    usePullUpLoad: {
      type: Boolean,
      default: false
    },
    useObserveDom: {
      type: Boolean,
      default: false
    },
    useObserveImage: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.bs = new BetterScroll(this.$refs.wrapper,{
      probeType: this.probeTypeNumber,
      pullUpLoad: this.usePullUpLoad,
      observeDOM: this.useObserveDom,
      observeImage: this.useObserveImage,
      click: true,
    })

    if(this.probeTypeNumber === 2 || this.probeTypeNumber === 3){
      this.bs.on('scroll', (position) => {
        this.$emit('bscroll',position)
      })
    }
    
    if(this.usePullUpLoad){
      this.bs.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.bs && this.bs.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.bs && this.bs.finishPullUp()
    },
    refresh() {
      this.bs && this.bs.refresh()
    },
    getScrollY() {
      if(this.bs) {
        return this.bs.y
      }
    }
  }
}
</script>

<style>

</style>