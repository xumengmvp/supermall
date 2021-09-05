<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topSwiper" :key="item">
      <img :src="item" alt="image">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topSwiper: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.detail-swiper {
  height: 300px;
}
</style>