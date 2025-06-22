<script setup>
import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
import FirstChild from './components/FirstChild.vue'

// 반응형 데이터를 정의하는 방법 - ref, reactive

const count = ref(0)
const numArr = reactive([1, 2, 3])
console.log(count.value)
console.log(numArr[0])

const increment = () => {
  count.value += 1
}

// 계산된 속성
const doubleCount = computed(() => count.value * 2)

// 감시자 속성성
watch(count, (n, o) => {
  console.log(n, o)
})

//라이프사이클 훅훅
onMounted(() => {
  console.log('onMounted')
})

provide('count', count)
provide('increment', increment)
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h1>doubleCount: {{ doubleCount }}</h1>
  <button @click="increment">증가</button>
  <FirstChild name="lee" :age="29" @increment="increment" />
</template>
<style scoped></style>
