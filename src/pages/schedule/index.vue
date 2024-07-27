<template>
  <view>
    <picker mode="date" @change="onDateChange">
      <view>{{ selectedDate }}</view>
    </picker>
    <view v-for="(event, index) in events" :key="index" class="event-item">
      <text>{{ event.name }} - {{ event.time }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const selectedDate = ref('请选择日期')
const events = ref([])

const onDateChange = (e) => {
  selectedDate.value = e.target.value
  // 根据选定日期获取相应赛事
  fetchEvents(selectedDate.value)
}

const fetchEvents = (date) => {
  // 模拟从后端获取数据
  events.value = [
    { name: '比赛1', time: '10:00' },
    { name: '比赛2', time: '12:00' }
  ]
}
</script>

<style scoped>
.event-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
