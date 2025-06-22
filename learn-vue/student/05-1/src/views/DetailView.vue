<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <h1>DetailView Vue: {{ route.params.id }}</h1>
  <!-- params 뒤에는 동적 세그먼트의 속성 -->
</template>
<style scoped></style>
