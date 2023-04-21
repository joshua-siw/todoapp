import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("todo.db");

const TodoContext = createContext([]);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows }) =>
        setTodos(rows._array)
      );
    });
  }, []);

  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>;
};

export default TodoContext;
