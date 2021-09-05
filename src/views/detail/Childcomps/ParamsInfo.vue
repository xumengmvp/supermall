<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length != 0">
    <table class="size-message">
      <tr v-for="(personItem,index) in paramsInfo.sizeMessage" :key="index">
        <td v-for="(item,index) in personItem" :key="index">
          {{item}}
        </td>
      </tr>
    </table>
    <table class="goods-params">
      <tr v-for="(item,index) in paramsInfo.goodsParams" :key="index">
        <td>{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.goods-params {
  width: 100%;
}
.goods-params tr {
  padding: 0 6px;
  display: block;
  border-top: 2px solid #e7e5e5;
  line-height: 40px;
}
.goods-params .value {
  padding-left: 50px;
  color: var(--color-tint);
}
.size-message {
  width: 100%;
}
.size-message tr {
  line-height: 40px;
  text-align: left;
  display: flex;
  padding: 0 6px;
  border-top: 2px solid #e7e5e5;
}
.size-message td {
  flex-grow: 1;
}
.params-info {
  box-shadow: 0px 2px 3px 2px #e7e5e5;
}
</style>