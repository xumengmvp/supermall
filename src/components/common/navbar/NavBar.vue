<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0px 1px 1px 1px rgba(100, 100, 100, 0.1);
}

.left {
  width: 60px;
}
.center {
  flex-grow: 1;
}
.right {
  width: 60px;
}
</style>