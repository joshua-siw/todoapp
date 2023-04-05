import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, StyleSheet, View } from "react-native";
import * as React from "react";
import Text from "./components/atoms/Text";
import Card from "./components/molecules/Card";
import Badge from "./components/atoms/Badge";
import { List } from "react-native-paper";
import MyComponent from "./components/atoms/ListItem";
import Topbar from "./components/atoms/Appbar";
import Appbar from "./components/atoms/Appbar";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
const clickButton = () => {
  console.log("dd");
};

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Card title="dd"></Card>
      </View>
    </SafeAreaView>
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
