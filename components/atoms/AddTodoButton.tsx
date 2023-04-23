import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddTodoButton = ({ onPress }) => (
  <FAB icon="plus" style={styles.fab} onPress={() => onPress()} />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 50,
    right: 0,
    bottom: -475,
  },
});

export default AddTodoButton;
