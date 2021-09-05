<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length != 0">
    <p>
      <span>用户评价</span>
      <span>更多</span>
    </p>
    <p class="avatar">
      <img :src="commentInfo.user.avatar" alt="avatar">
      <span>{{commentInfo.user.uname}}</span>
    </p>
    <p class="comment-message">
      {{commentInfo.content}}
    </p>
    <p class="time">
      <span>{{getDate(new Date(this.commentInfo.created * 1000))}}</span>
      <span class="goods-style">{{commentInfo.style}}</span>
    </p>
    <p class="comment-image">
      <img v-for="item in commentInfo.images" :key="item" :src="item" alt="image">
    </p>
  </div>
</template>

<script>
import {getFormatDate} from 'common/utils'

export default {
  data() {
    return {
      recommend: []
    }
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    getDate(date) {
      return getFormatDate(date)
    }
  }
}
</script>

<style>
.comment-info {
  padding-bottom: 30px;
  border-bottom: 2px solid #e6e6e6;
}
.comment-info>p:first-child {
  display: flex;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding: 0 6px;
  justify-content: space-between;
  border-bottom: 2px solid #e6e6e6;
}
.avatar {
  padding: 0 6px;
  margin-top: 20px;
  display: flex;
}
.avatar img {
  width: 60px;
  height: 60px;
  display: block;
}
.avatar span {
  display: block;
  height: 60px;
  line-height: 60px;
  margin-left: 10px;
}
.comment-message {
  margin-top: 10px;
  padding: 0 6px;
}
.comment-info .time {
  margin: 8px 0;
  padding: 0 6px;
}
.time .goods-style {
  margin-left: 10px;
}
.comment-info .comment-image {
  display: flex;
  flex-wrap: wrap;
  margin-top: px;
  padding: 0 6px;
}
.comment-info .comment-image img{
  width: 100px;
  height: 100px;
  margin: 0 2px;
}
</style>