<script setup>
import Todo from "./components/Todo.vue";

data(() => {
  return {
    taskList: JSON.parse(localStorage.getItem("taskList")) || [],
  };
});
provide(() => {
  return {
    task: this.taskList,
  };
});
</script>
<template>
  <Todo />
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
