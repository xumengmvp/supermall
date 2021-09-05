<template>
  <div class="tabbaritem" @click="itemClick">
    <div v-if="isActive"><slot name="active"></slot></div>
    <div v-else><slot name="notactive"></slot></div>
    <div :style="color"><slot name="font"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    path: {
      type: String,
      default: '/',
    },
    fontcolor: {
      type: String,
      default: 'green'
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path !== this.path){
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive() {
      if(this.$route.path === this.path){
        return true
      }
      return false
    },
    color() {
      return this.isActive ? {color: this.fontcolor} : {}
    }
  }  
}
</script>

<style>
.tabbaritem {
  flex-grow: 1;
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.tabbaritem img {
  width: 30px;
  height: 30px;
  display: block;
}
.tabbaritem span {
  display: block;
}
</style>