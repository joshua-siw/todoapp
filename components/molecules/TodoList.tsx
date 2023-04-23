import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { getAllTodos } from "../../functions/db-service";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from "react-native-paper";
import ListItem from "../atoms/ListItem";
import TodosContext from "../../context/todosContext";

// Open the database
// const db = SQLite.openDatabase("todo.db");

function TodoList({ navigation }) {
  const todos = useContext(TodosContext);

  // useEffect(() => {
  //   // Get all the entries from the 'todos' table
  //   db.transaction((tx) => {
  //     tx.executeSql("SELECT * FROM todos", [], (_, { rows }) =>
  //       setTodos(rows._array)
  //     );
  //   });
  // }, []);

  return (
    <View>
      <ScrollView>
        <View>
          {todos.todos.map((todo) => (
            <View key={todo.id}>
              <ListItem
                title={todo.task}
                description={todo.date}
                key={todo.id}
                icon={undefined}
                navigation={navigation}
                ids={todo.id}
                completed={todo.completed}
                date={todo.date}
              ></ListItem>
              <Divider />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default TodoList;
