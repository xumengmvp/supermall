<template>
  <div class="home-recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="image">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.home-recommend {
  width: 100%;
  display: flex;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid #EEEDEF;
}
.recommend-item {
  flex-grow: 1;
}
.recommend-item a{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.recommend-item img , .recommend-item span {
  display: block;
  width:80%;
  text-align:center;
}

.recommend-item span {
  margin-top: 10px;
}

</style>