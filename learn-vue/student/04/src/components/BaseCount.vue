<script>
export default {
  name: 'BaseCount',
  data() {
    return {
      count: 10,
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
  mounted() {
    console.log(this.$parent.name)
    // 자식 컴포넌트에서 부모 컴포넌트에 접근 가능. 사용 권장되지 않음(안티패턴)
  },
}
</script>
<template>
  <h1>{{ count }}</h1>
  <button @click="count += 1">count</button>
</template>
<style scoped></style>
