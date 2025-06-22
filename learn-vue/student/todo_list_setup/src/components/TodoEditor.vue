<script setup>
import { inject, ref } from "vue";

const taskText = ref("");
const task = inject("task");
const addTask = () => {
  if (taskText.value === "") {
    alert("할 일을 입력해 주세요");
  } else {
    if (task.length > 0) {
      task.push({
        id: task[task.length - 1].id + 1,
        title: taskText.value,
        done: false,
      });
      taskText.value = "";
    } else {
      task.push({
        id: 0,
        title: taskText.value,
        done: false,
      });
      taskText.value = "";
    }
  }
  localStorage.setItem("taskList", JSON.stringify(task));
};
</script>
<template>
  <div class="flex p-4">
    <input
      type="text"
      placeholder="Enter a new todo"
      class="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      v-model="taskText"
    />
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
      @click="addTask"
    >
      Add Todo
    </button>
  </div>
</template>
<style></style>
