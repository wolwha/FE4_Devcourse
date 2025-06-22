<script setup>
import CountGroup from '@/components/CountGroup.vue'
import CountOutSide from '@/components/CountOutSide.vue'
import { ref } from 'vue'

const Count = ref(0)
const increment = () => (Count.value += 1)
const decrement = () => (Count.value -= 1)
const reset = () => (Count.value = 0)
</script>
<template>
  <div style="height: 5000px">
    <CountGroup :count @increment="increment" @decrement="decrement" @reset="reset" />
    <CountOutSide :count />
  </div>
</template>
<style scoped></style>
