import postgres from "postgres";

const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "example",
  username: "example",
  password: "example",
});

export default sql;
