import * as React from "react";
import { Button as AppButton } from "react-native-paper";

const AddTodoButton = ({ onPress }) => (
  <AppButton
    style={{ height: 50, width: 50, marginTop: 10 }}
    icon="plus"
    mode="outlined"
    onPress={() => onPress()}
    children={""}
  ></AppButton>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatinBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
};

export default AddTodoButton;
