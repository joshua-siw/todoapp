import React, { createContext, useContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export interface ITodosContext {
  todos: any[];
  setTodos: any;
  updateTodos: Function;
}

const db = SQLite.openDatabase("todo.db");

const TodosContext = createContext<ITodosContext>({} as ITodosContext);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setTodos(_array);
      });
    });
  }, []);

  const updateTodos = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setTodos(_array);
      });
    });
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, updateTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
TodosProvider;
