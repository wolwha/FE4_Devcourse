<script setup>
import { inject } from "vue";
import TodoListItem from "./TodoListItem.vue";
const task = inject("task");
const deleteTask = (index) => {
  task.splice(index, 1);
  localStorage.setItem("taskList", JSON.stringify(task));
};
const doneTask = (index) => {
  if (task[index].done === false) {
    task[index].done = true;
    localStorage.setItem("taskList", JSON.stringify(task));
  } else {
    task[index].done = false;
    localStorage.setItem("taskList", JSON.stringify(task));
  }
};
</script>
<template>
  <ul>
    <TodoListItem
      class="divide-y divide-gray-200"
      v-for="(todo, index) in task"
      :key="todo.id"
      :todo="todo"
      @delete-Task="deleteTask(index)"
      @done-Task="doneTask(index)"
    />
  </ul>
</template>
<style></style>
