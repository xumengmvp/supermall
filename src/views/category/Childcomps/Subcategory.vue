<template>
  <div class="subcategory" v-if="Object.keys(subcategory).length != 0">
    <div class="subcategory-list" v-for="(item,index) in subcategory" :key="index">
      <img :src="item.image" alt="image">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subcategory: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.subcategory {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: space-between;
  padding-top: 20px;
}
.subcategory-list {
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.subcategory-list img {
  width: 90px;
  height: 90px;
  display: block;
  margin-bottom: 15px;
}
</style>