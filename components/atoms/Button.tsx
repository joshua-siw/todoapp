import * as React from "react";
import { Button as AppButton } from "react-native-paper";

interface ButtonProps {
  title: string;
}

const handlePress = ({ onPress }) => {
  console.log("pressed button");
  onPress;
};

const Button = ({ onPress, title, icon }) => (
  <AppButton icon={icon} mode="outlined" onPress={() => onPress()}>
    {title}
  </AppButton>
);

export default Button;
