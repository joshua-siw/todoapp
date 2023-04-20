import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { getAllTodos } from "../../functions/db-service";
import { ScrollView } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import ListItem from "../atoms/ListItem";

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

  //   const renderItem = ({ item }) => {
  //     return (
  //       <ScrollView>
  //         {todos.map((todo) => (
  //           <ListItem
  //             title={todo.task}
  //             description={todo.date}
  //             key={todo.id}
  //             icon={undefined}
  //             navigation={navigation}
  //             id={undefined}
  //           ></ListItem>
  //         ))}
  //       </ScrollView>
  //     );
  //   };

  return (
    <View>
      <ScrollView>
        <View>
          {todos.map((todo) => (
            <View key={todo.id}>
              <ListItem
                title={todo.task}
                description={todo.date}
                key={todo.id}
                icon={undefined}
                navigation={navigation}
                id={undefined}
              ></ListItem>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default TodoList;
