<script>
export default {
  name: 'BaseButton',
  data() {
    return {
      text: 'Login',
    }
  },
}
</script>
<template>
  <slot name="title"></slot>
  <!-- slot을 여러개 사용하면 name속성으로 구분해줘야함 -->
  <button>
    <!-- 이름 없는 슬롯 -->
    <slot :text>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>
<style scoped>
span {
  color: pink;
}
</style>
<!-- slot은 리액트의 children과 같은 속성 -->
<!-- 컴포넌트의 컨텐츠가 slot으로 대체됨 -->
