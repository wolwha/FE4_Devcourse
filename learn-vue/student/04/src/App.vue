<script>
// import OptionCount from './components/OptionCount.vue'
import SetupCount from './components/SetupCount.vue'
import SetupAliasCount from './components/SetupAliasCount.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: { SetupAliasCount },
}
</script>
<template>
  <!-- <OptionCount /> -->
  <SetupAliasCount />
</template>
<style scoped></style>
