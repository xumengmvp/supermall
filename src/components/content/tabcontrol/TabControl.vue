<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" @click="clickItem(index)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
      this.$emit('clickListener',index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  background-color: white;
}

.tab-control-item {
  flex-grow: 1;
  text-align: center;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: #FF8198;
  border-bottom: 2px solid #FF8198;
}
</style>