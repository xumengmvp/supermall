<template>
  <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <div>优品网</div>
      </template>
  </nav-bar>  
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
.home-nav-bar {
  width:100%;
  background-color: var(--color-tint);
  color: #FFF;
}
</style>