<template>
  <div :class="{cartActive: checkState}" class="check-button">
    <img src="~assets/img/cart/tick.svg" alt="image"/>
  </div>
</template>

<script>
export default {
  props: {
    checkState: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .cartActive {
    background-color: var(--color-tint) !important;
    border: 2px solid var(--color-tint) !important;
  }
  .check-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #b4b3b3;
  }
  .check-button img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>