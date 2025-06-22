<script>
export default {
  name: 'CountButtonsWithProp',
  data() {
    return {}
  },
  props: {
    handleMinus: {
      type: Function,
    },
    reset: {
      type: Function,
    },
    handlePlus: {
      type: Function,
    },
    incrementByAmount: {
      type: Function,
    },
  },
}
</script>
<template>
  <button @click="handleMinus">-</button>
  <button @click="reset">0</button>
  <button @click="handlePlus">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>
