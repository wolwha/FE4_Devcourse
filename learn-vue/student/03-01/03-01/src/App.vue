<script>
// import CountButtons from './components/CountButtons.vue'
// import CountButtonsWithProp from './components/CountButtonsWithProp.vue'
// import CountDisplay from './components/CountDisplay.vue'
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  data() {
    return {
      count: 20,
    }
  },
  provide() {
    return {
      count: () => this.count,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  components: {
    // CountButtons,
    // CountDisplay,
    // CountButtonsWithProp,
    CountGroup,
  },
  // provide: 전역 상태관리와 유사하다, 자식으로만 공급이 된다.
  // 데이터의 반응성이 깨짐
  methods: {
    decrement() {
      this.count -= 1
    },
    increment() {
      this.count += 1
    },
    reset() {
      this.count = 0
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <!-- <CountDisplay :count />
  <span>omit</span>
  <br />
  <CountButtons @countMinus="handleMinus" @countPlus="handlePlus" @reset="reset" />
  <br />
  <span>props</span>
  <br />
  <CountButtonsWithProp
    :handleMinus="handleMinus"
    :handlePlus="handlePlus"
    :reset="reset"
    :incrementByAmount="(amount) => incrementByAmount(amount)"
  />
  <br />
  <span>Group</span> -->
  <CountGroup />
</template>
<style scoped></style>
