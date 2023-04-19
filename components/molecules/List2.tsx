import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { getAllTodos } from "../../functions/db-service";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";

// Open the database
const db = SQLite.openDatabase("todo.db");

function TodoList({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Get all the entries from the 'todos' table
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM todos", [], (_, { rows }) =>
        setTodos(rows._array)
      );
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        {todos.map((todo) => (
          <List.Item
            title={todo.task}
            description={todo.date}
            key={todo.id}
          ></List.Item>
        ))}
      </ScrollView>
    );
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default TodoList;
