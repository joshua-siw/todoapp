import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, StyleSheet, View } from "react-native";
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

// {
//   /* <SafeAreaProvider>
//       <View style={styles.container}>
//         <Text variant="displayLarge" content="hello react native"></Text>
//         <Badge value={6} title="test"></Badge>
//         <Card title="dd"></Card>
//         <Appbar />
//       </View>
//     </SafeAreaProvider> */
// }

function HomeScreen() {
  return (
    <View>
      <List></List>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Card title={"Todotask"} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const clickButton = () => {
  console.log("dd");
};
{
  /* <NavigationContainer>
      <SafeAreaView>
        <Card title="s" />
      </SafeAreaView>
    </NavigationContainer> */
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          component={HomeScreen}
          options={{ title: "Overview" }}
         />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
