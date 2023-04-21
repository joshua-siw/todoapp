import React, { createContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("todo.db");

const NotesContext = createContext([]);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows }) =>
        setNotes(rows._array)
      );
    });
  }, []);

  return (
    <NotesContext.Provider value={notes}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
