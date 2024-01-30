<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "createTodo", inputTodo: string): void;
}>();

const inputTodo = ref("");

const createTodo = () => {
  if (inputTodo.value.trim()) {
    emit("createTodo", inputTodo.value);
  }
  inputTodo.value = "";
};
</script>

<template>
  <input v-model="inputTodo" />
  <button @click="createTodo">Create</button>
</template>

<style scoped lang="scss"></style>
