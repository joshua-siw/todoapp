import React, { createContext, useContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export interface ITodosContext {
  todos;
  setTodos;
  updateTodos: Function;
}

const db = SQLite.openDatabase("todo.db");

// Create a context for loading notes from the database
const TodosContext = createContext<ITodosContext>({} as ITodosContext);

// Create a provider for the context
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Load notes from the database when the component mounts
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setTodos(_array);
      });
    });
  }, [todos]);

  // Define a function to update the notes state when a note is added or deleted
  const updateTodos = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setTodos(_array);
      });
    });
  };

  // Return the NotesContext provider with the notes state and updateNotes function
  return (
    <TodosContext.Provider value={{ todos: todos, setTodos, updateTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

// Create a custom hook for accessing the NotesContext
export default TodosContext;
TodosProvider;
