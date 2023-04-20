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

function deleteDB(dbName) {
  // Define the name of the database file
  const DB_NAME = dbName;

  // Get the directory where the database is stored
  const dbDir = `${FileSystem.documentDirectory}SQLite`;

  // Define the full path to the database file
  const dbPath = `${dbDir}/${DB_NAME}`;

  // Function to delete the database file
  function deleteDatabase() {
    return FileSystem.deleteAsync(dbPath, { idempotent: true });
  }
  deleteDatabase();
}

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

const dropTable = (db) => {
  db.transaction((tx) => {
    "DROP TABLE todos";
    console.log("dropped table todos");
  });
};

function updateTodoEntry(date, completed, task, id, db) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE todos SET date = ?, completed = ?, task = ? WHERE id = ?",
        [date, completed, task, id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log(`Todo with id ${id} was updated`);
          } else {
            console.log(`Could not update todo with id ${id}`);
          }
        },
        (error) => console.error(error)
      );
    });
  });
}

function addTodoEntry(date, completed, task, db) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO todos (date, completed, task) VALUES (?, ?, ?)",
        [date, completed, task],
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
  getAllTodos,
  addTodoEntry,
  updateTodoEntry,
  dropTable,
  deleteDB,
};
