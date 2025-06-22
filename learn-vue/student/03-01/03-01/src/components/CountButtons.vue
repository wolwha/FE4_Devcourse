<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },
  inject: ['decrement', 'increment', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount">++</button>
</template>
<style scoped></style>
