import { StatusBar } from "expo-status-bar";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import * as React from "react";
import Text from "./components/atoms/Text";
import Card from "./components/molecules/Card";
import Badge from "./components/atoms/Badge";
import MyComponent from "./components/atoms/ListItem";
import Topbar from "./components/atoms/Appbar";
import Appbar from "./components/atoms/Appbar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import ListItem from "./components/atoms/ListItem";
import List from "./components/molecules/List";
import { ScrollView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  dbConnection,
  checkDatabase,
  addTodoEntry,
  getAllTodos,
  dropTable,
  deleteDB,
  updateTodoEntry,
} from "./functions/db-service";
import List2 from "./components/molecules/List2";
import Button from "./components/atoms/Button";
import TodoList from "./components/molecules/List2";

function HomeScreen({ navigation }) {
  return (
    <View>
      <List navigation={navigation}></List>
      <Button
        title="hu"
        icon="bug"
        onPress={() => navigation.navigate("DBList")}
      ></Button>
    </View>
  );
}

function DBFlatList({ navigation }) {
  return (
    <View>
      <TodoList navigation={navigation} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

{
  /* <NavigationContainer>
      <SafeAreaView>
        <Card title="s" />
      </SafeAreaView>
    </NavigationContainer> */
}
export default function App() {
  // const db = openDatabase();
  // createTable(db);
  // deleteDB("todp.db");
  // const db = dbConnection();
  // // checkDatabase();
  // addTodoEntry("13", true, "task", db);
  // getAllTodos(db)
  //   .then((results) => {
  //     console.log(results);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // updateTodoEntry("1", false, "go outside", "1", db)
  //   .then((success) => {
  //     console.log(`Todo update was ${success ? "successful" : "unsuccessful"}`);
  //   })
  //   .catch((error) => {
  //     console.error(`Error updating todo: ${error}`);
  //   });
  // getAllTodos(db)
  //   .then((results) => {
  //     console.log(results);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen name="Details" component={Card} />
        <Stack.Screen name="DBList" component={DBFlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
