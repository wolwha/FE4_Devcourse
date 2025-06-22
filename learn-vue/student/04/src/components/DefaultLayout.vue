<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<template>
  a
  <slot name="header">
    <header><h1>default header</h1></header>
    <!-- 기본값을 넣을 수 있으며 전달되는 값이 기본값보다 우선이다. -->
  </slot>
  b
  <slot name="main"></slot>
  c
  <!-- 이름이 지정되지 않은건 default로 들어감 -->
  <slot name="footer"></slot>
  <!-- slot은 비어있어도 상관이 없다. 다른 컴포넌트에서 전달받지 않아도 됨 -->
  d
</template>
<style scoped></style>
