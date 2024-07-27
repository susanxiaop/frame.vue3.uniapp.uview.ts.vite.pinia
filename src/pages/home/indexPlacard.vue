<template>
  <view id="body">
    lalal
    <!-- 公告 -->
    <view class="news" style="margin-top: 8rpx;">
      <uni-notice-bar
        :text="news"
        background="#ffffff"
        color="#3c9cff"
        direction="row"
        left-icon="info"
        right-icon="close"
      ></uni-notice-bar>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const news = ref('让校园生活更轻松，服务从这里开始！\n发现更多校园生活乐趣，尽在我们平台\n校园服务平台，为您的生活加速');
</script>

<style scoped lang="scss"></style>
