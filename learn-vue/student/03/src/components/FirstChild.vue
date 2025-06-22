<script>
export default {
  name: 'FirstChild',
  data() {
    return {
      color: 'blue',
      isLoggedin: true,
    }
  },
}
</script>
<template>
  <div>
    <h1 :class="{ isLoggedin }" :style="{ color, textDecoration: 'underline' }">FirstChild Vue</h1>
  </div>
</template>
<style scoped>
.isLoggedin {
  font-size: 50px;
}
</style>
