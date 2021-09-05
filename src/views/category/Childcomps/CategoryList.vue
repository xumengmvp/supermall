<template>
  <div class="category-list" v-if="Object.keys(category).length != 0">
    <ul>
      <li v-for="(item,index) in category" :key="index" :class="{categoryActive: index === currentIndex}" @click="clickList(index)">
        {{item.title}}
      </li>
    </ul>
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
    category: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  methods: {
    clickList(index) {
      this.currentIndex = index
      this.$emit('clickItem',index)
    }
  }
}
</script>

<style>
.category-list li {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #F7F5F7;
  font-weight: 600;
  border-left: 4px solid #F7F5F7;
}
.categoryActive {
  background-color: white !important;
  color: var(--color-tint);
  border-left: 4px solid var(--color-tint) !important;
}
</style>