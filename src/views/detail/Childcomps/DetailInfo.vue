<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length != 0">
    <div class="forward">
      <div class="circle"></div>
      <div class="string"></div>
    </div>
    <p class="desc">{{detailInfo.desc}}</p>
    <div class="backward">
      <div class="string"></div>
      <div class="circle"></div>
    </div>
    <p class="key">{{detailInfo.key}}</p>
    <img v-for="item in detailInfo.image" 
      :key="item" 
      :src="item" 
      alt="image" @load="loadDetailImage">
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    loadDetailImage() {
      this.$emit('loadDetailImage')
    }
  }
}
</script>

<style>
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
}
.string {
  width: 100px;
  height: 0.5px;
  border: 0.5px solid black;
  margin-top: 1px;
}
.desc {
  font-size: 14px;
  padding: 0 6px;
  margin-top: 20px;
  text-indent: 18px;
}
.key {
  text-align: left;
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
  padding: 0 6px;
}
.forward,.backward{
  display: flex;
  align-items: center;
  padding: 0 6px;
}
.backward {
  justify-content: flex-end;
}
.detail-info {
  margin-top: 26px;
}
.detail-info img {
  display: block;
  width: 100%;
}
.detail-info {
  box-shadow: 0px 2px 3px 2px #e7e5e5;
}
</style>