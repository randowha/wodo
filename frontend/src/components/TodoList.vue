<script setup lang="ts">
import { Todo } from "../App.vue";

defineProps<{ todos: Array<Todo> }>();
const emit = defineEmits<{ (e: "deleteTodo", id: number): void }>();
</script>

<template>
  <ul>
    <li v-for="todo in todos">
      {{ todo.task }}
      <button @click="emit('deleteTodo', todo.id)">Delete</button>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
