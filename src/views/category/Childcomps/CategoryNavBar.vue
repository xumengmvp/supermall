<template>
  <div class="category-nav-bar">
    <nav-bar>
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components: {
    NavBar
  }

}
</script>

<style>
.category-nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-weight: bold;
}
</style>