<template>
  <nav-bar>
    <template v-slot:left>
      <div class="detail-image" @click="back">
        <img src="~assets/img/common/back.svg" alt="image">
      </div>
    </template>
    <template v-slot:center>
      <div class="detail-titles">
        <div v-for="(item,index) in titles" :key="item" 
        @click="clickItem(index)" :class="{detailactive: currentIndex === index}">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    clickItem(index) {
      this.currentIndex = index
      this.$emit('clickNavBar',index)
    }
  }
}
</script>

<style>
.detail-titles {
  display: flex;
}
.detail-image {
  width: 100%;
  height: 100%;
}
.detail-titles div {
  flex-grow: 1
}
.detail-image img {
  margin-top: 10px;
}
.detailactive {
  color: var(--color-tint);
}
</style>