import { StatusBar } from "expo-status-bar";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Button as But,
} from "react-native";
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
import Button from "./components/atoms/Button";
import TodoList from "./components/molecules/TodoList";
import TodosContext, { TodosProvider } from "./context/todosContext";
import { useContext } from "react";
import AddTodoButton from "./components/atoms/AddTodoButton";

function HomeScreen({ navigation }) {
  return (
    <View>
      <TodoList navigation={navigation} />
      <AddTodoButton
        onPress={() =>
          navigation.navigate("Details", {
            title: "i",
          })
        }
      />
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
  const db = dbConnection();
  getAllTodos(db)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <TodosProvider>
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
    </TodosProvider>
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
