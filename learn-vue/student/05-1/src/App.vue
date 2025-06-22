<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
// .push
// .replace
// .go
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/" activeClass="Home">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'productDetail', params: { orderId: '10' } }">Detail 1</RouterLink>
    <RouterLink to="/product/2">Detail 2</RouterLink>

    <button @click="router.push('/about')">클릭</button>
    <button @click="router.replace({ name: 'about' })">클릭</button>
    <button @click="router.go(-1)">클릭</button>
    <!-- 양수: 숫자만큼 앞으로, 음수: 숫자만큼 뒤로 -->
    <!-- go는 이전 페이지로 이동할 때 가장 많이 사용함 -->
    <!-- 프로그래밍 탐색 방식 -->
  </nav>
  <h1>a</h1>
  <RouterView name="header" />
  <h1>b</h1>
  <RouterView name="default" />
  <h1>c</h1>
  <RouterView name="footer" />
</template>
<style scoped></style>
