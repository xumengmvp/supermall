<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#tabbar {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: #F0EFF0;
  box-shadow: 0px 1px 1px 2px rgba(100, 100, 100, 0.1);
  z-index: 2;
}
</style>