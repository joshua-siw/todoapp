import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";

const dbConnection = () => {
  // Open the database
  const db = SQLite.openDatabase("todo.db");

  // Create the 'todos' table
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, completed BOOLEAN, task TEXT)"
    );
  });
  return db;
};

function isTableEmpty(db) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT COUNT(*) as count FROM todos",
        [],
        (_, { rows: { _array } }) => {
          const count = _array[0].count;
          if (count === 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

const addDebugEntrys = (db) => {
  isTableEmpty(db).then((isEmpty) => {
    console.log(isEmpty);
    if (isEmpty) {
      db.transaction((tx) => {
        // Prepopulate the 'todos' table with 100 entities
        for (let i = 0; i < 100; i++) {
          tx.executeSql(
            "INSERT INTO todos (date, completed, task) VALUES (?, ?, ?)",
            [`Todo ${i}`, Math.random() < 0.5 ? true : false, `Task ${i}`]
          );
        }
      });
    } else {
      console.log("already added entrys");
    }
  });
};

function addTodoEntry(date, completed, db) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO todos (date, completed) VALUES (?, ?)",
        [date, completed],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            resolve(insertId);
          } else {
            reject(new Error("Insert failed"));
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

function getAllTodos(db) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM todos",
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

const checkDatabase = () => {
  // Check if the database file exists
  FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite/todo.db`)
    .then(({ exists }) => {
      if (exists) {
        console.log("Database exists");
      } else {
        console.log("Database does not exist");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export {
  dbConnection,
  checkDatabase,
  addDebugEntrys,
  getAllTodos,
  addTodoEntry,
};
