<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
} from 'vue'

const count = ref(0)
console.log(count.value)
// ref는 같은 블럭 안에서는 값에 접근하려면 value를 사용
const doubleCount = computed(() => count.value * 2)
const increment = () => (count.value += 1)
const decrement = () => (count.value -= 1)
const reset = () => (count.value = 0)
const userObj = reactive({ name: 'lee' }) // 객체, 배열
// reactive는 객체를 사용하듯 접근하면 된다.
console.log(userObj.name)
const numArrs = reactive([1, 2, 3])
const message = ref('')
const pEl = ref(null)

// computed
const doubleCounts = computed(() => count.value * 2)

// methods
const increments = () => (count.value += 1)

// watch
// watchEffect => watch + deep: true + immediate: true DOM 렌더링 전에 실행
// watchPostEffect => watch + flush: 'post' DOM에 직접적으로 접근할 때 사용하는 것이 더 정확한 이펙트를 가져올 수 있다.
watch(count, (n, o) => console.log(n, o))
watch(numArrs, (n, o) => console.log(n, o))
watchEffect(() => {
  console.log(count.value) // 데이터 자동감시
  console.log(message.value)
  console.log(pEl.value?.innerText)
})

onBeforeMount(() => console.log('onBeforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onUnmounted(() => console.log('onUnmounted'))
// reactive에서는 변경이 감지가 되지만 ref로는 감지되지 않음
// ref에서 변경사항을 감지하려면 deep: true를 사용
</script>
<template>
  <h1>Setup Count: {{ count }} // {{ doubleCount }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <h1>{{ count }}</h1>
  <h1>{{ numArrs }}</h1>
  <h1>{{ doubleCounts }}</h1>
  <button @click="increments">증가</button>
  <h1>{{ numArrs }}</h1>
  <button @click="numArrs.push(4)">추가</button>
  <br />
  <p ref="pEl">{{ message }}</p>
  <input type="text" v-model="message" />
</template>
<style scoped></style>
