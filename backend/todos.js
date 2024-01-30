import sql from "./db.js";

export const getTodos = async () => {
  return sql`
    SELECT *
    FROM todos
    `;
};

export const insertTodo = async (newTask) => {
  const result = await sql`
    INSERT INTO todos
    ${sql({ task: newTask })}
    RETURNING *
  `;
  return result[0];
};

export const deleteTodo = async (deletedId) => {
  await sql`
    DELETE FROM todos
    WHERE id = ${deletedId}
  `;
};
