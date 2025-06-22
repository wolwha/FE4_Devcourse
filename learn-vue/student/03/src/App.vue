<script>
import FirstChild from './components/FirstChild.vue'
export default {
  name: 'App',
  components: {
    FirstChild,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <h1>App Vue</h1>
  <h2 class="text-red-300">안녕</h2>
  <p class="text-amber-400">Vue</p>
  <FirstChild />
</template>
<style scoped>
/* scoped: 스타일이 지역 범위. 예외: 컴포넌트에서 div태그를 제외하면 컴포넌트에도 style이 적용됨. */
/* 태그 선별자를 남발하지 않기 */
/* 태그 선택자: 사용에 제일 주의해야함 */
/* 아이디 선택자 */
/* 클래스 선택자 */
/* 전체 선택자 */
/* 속성 선택자 */
/* 자식 선택자 */
/* 그룹 선택자 */
/* 형제 선택자 */
/* 하위 선택자 */
h1 {
  color: red;
}
</style>
