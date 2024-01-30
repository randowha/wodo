<script setup lang="ts">
import { ref } from "vue";
import TodoList from "./components/TodoList.vue";
import CreateTodo from "./components/CreateTodo.vue";

export type Todo = {
  id: number;
  task: string;
};

const todos = ref<Array<Todo>>([]);

// fetch todos
(async () => {
  const res = await fetch("http://localhost:3000/");
  const data = await res.json();
  todos.value = data;
})();

const fetchPost = async <T>(url: string, body: any): Promise<T> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ data: body }),
  });
  return res.json();
};

const fetchDelete = async (url: string): Promise<{ deletedId: number }> => {
  const res = await fetch(url, {
    method: "DELETE",
  });
  return res.json();
};

const createTodo = async (inputTodo: string) => {
  const createdTodo = await fetchPost<Todo>(
    "http://localhost:3000/",
    inputTodo
  );
  todos.value = [...todos.value, createdTodo];
};

const deleteTodo = async (id: Todo["id"]) => {
  const deletedId = (await fetchDelete("http://localhost:3000/todos/" + id))
    .deletedId;
  todos.value = todos.value.filter((todo) => todo.id !== deletedId);
};
</script>

<template>
  <h1>Wodo</h1>
  <div class="todos">
    <TodoList @delete-todo="deleteTodo" :todos="todos"></TodoList>
  </div>
  <CreateTodo @create-todo="createTodo"></CreateTodo>
</template>

<style scoped lang="scss"></style>
