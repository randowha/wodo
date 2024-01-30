import express from "express";
import cors from "cors";
import { getTodos, insertTodo, deleteTodo } from "./todos.js";

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", async (req, res) => {
  const todos = await getTodos();
  res.send(todos);
});

app.post("/", async (req, res) => {
  const newTask = req.body.data;
  const newTodo = await insertTodo(newTask);
  res.send(newTodo);
});

app.delete("/todos/:id", async (req, res) => {
  const deletedId = Number.parseInt(req.params.id);
  await deleteTodo(deletedId);
  res.status(200);
  res.send({ deletedId });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
