import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("data/data.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});
