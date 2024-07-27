<template>
  <view id="body">
    <indexPlacard v-if="flag"></indexPlacard>
    <indexCarousel v-if="flag"></indexCarousel>
    <indexclassify v-if="flag"></indexclassify>
    <view style="width: 696rpx; margin: 0 auto;">
      <indexGoodContent v-if="flag"></indexGoodContent>
    </view>
    <indexOrderCenter v-if="flag"></indexOrderCenter>
  </view>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';
import indexPlacard from './indexPlacard.vue';


const flag = ref(true);

const onPullDownRefresh = () => {
  console.log('触发了下拉刷新');
  flag.value = false;
  nextTick(() => {
    flag.value = true;
    uni.stopPullDownRefresh(); // 停止当前页面的下拉刷新
  });
};

const onReachBottom = () => {
  console.log('触发了上拉加载');
  // 加载数据的逻辑可以放在这里
};

const onShow = () => {
  const num = uni.getStorageSync('tabbar');
  if (num > 0) {
    uni.setTabBarBadge({
      index: 1, // tabbar下标
      text: `${num}`, // 数字
      success() {
        console.log('设置成功');
      },
      fail(e) {
        console.log('设置失败' + JSON.stringify(e));
      }
    });
  }
};

// 监听页面生命周期
onMounted(() => {
  onShow();
});

// 注册事件
uni.$on('pullDownRefresh', onPullDownRefresh);
uni.$on('reachBottom', onReachBottom);
console.log(flag.value)
</script>

<style scoped>
/* @import url('../static/css/componentsCss/index/index.css'); */

page {
  background-color: #f5f5f5;
}
</style>
