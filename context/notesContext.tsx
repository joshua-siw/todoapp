import React, { createContext, useContext, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

export interface INotesContext {
  notes;
  updateNotes: Function;
}

const db = SQLite.openDatabase("todo.db");

// Create a context for loading notes from the database
const NotesContext = createContext<INotesContext>({} as INotesContext);

// Create a provider for the context
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Load notes from the database when the component mounts
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setNotes(_array);
      });
    });
  }, []);

  // Define a function to update the notes state when a note is added or deleted
  const updateNotes = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows: { _array } }) => {
        setNotes(_array);
      });
    });
  };

  // Return the NotesContext provider with the notes state and updateNotes function
  return (
    <NotesContext.Provider value={{ notes, updateNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

// Create a custom hook for accessing the NotesContext
export default NotesContext;
NotesProvider;
