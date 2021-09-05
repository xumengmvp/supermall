<template>
  <div class="toast" v-show="isShowToast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  /* props: {
    message: {
      type: String,
      default: 'toast'
    },
    isShowToast: {
      type: Boolean,
      default: false
    }
  }, */
  data() {
    return {
      message: '',
      isShowToast: false
    }
  },
  methods: {
    show(res = '加入购物车成功',delay = 1500) {

      this.message = res
      
      this.isShowToast = true

      setTimeout(() => {
        this.isShowToast = false
        this.message = ''
      },delay)
    }
  }
}
</script>

<style>
.toast {
  width: 200px;
  height: 46px;
  line-height: 46px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, .6);
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -15px;
  text-align: center;
  border-radius: 8px;
  z-index: 10;
}
</style>