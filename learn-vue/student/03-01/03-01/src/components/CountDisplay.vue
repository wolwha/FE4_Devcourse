<script>
export default {
  name: 'CountDisplay',
  data() {
    return {}
  },
  inject: ['count'],
  // provide로 공급한 데이터는 inject로 받는다.
  computed: {
    currnetCount() {
      return this.count()
    },
  },
}
</script>
<template>
  <div>
    <h1>Count: {{ currnetCount }}</h1>
  </div>
</template>
<style scoped></style>
