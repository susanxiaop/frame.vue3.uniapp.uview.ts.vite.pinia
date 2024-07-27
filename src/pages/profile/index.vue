<template>
  <view>
    <view class="profile">
      <text>姓名: {{ user.name }}</text>
      <text>邮箱: {{ user.email }}</text>
    </view>
    <view class="registrations">
      <view v-for="(registration, index) in registrations" :key="index" class="registration-item">
        <text>{{ registration.event }} - {{ registration.status }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({
  name: '张三',
  email: 'zhangsan@example.com'
})

const registrations = ref([
  { event: '比赛1', status: '已报名' },
  { event: '比赛2', status: '已取消' }
])
</script>

<style scoped>
.profile {
  padding: 10px;
}

.registrations {
  padding: 10px;
}

.registration-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
