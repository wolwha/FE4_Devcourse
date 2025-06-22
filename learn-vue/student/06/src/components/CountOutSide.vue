<script setup>
const props = defineProps({
  count: Number,
})
</script>
<template>
  <h1>Count: {{ props.count }}</h1>
</template>
<style scoped></style>
