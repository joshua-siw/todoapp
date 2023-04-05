import * as React from "react";
import { TextInput as Input } from "react-native-paper";

interface TextInputProps {
  label: string;
}

const TextInput = ({ label }) => {
  const [text, setText] = React.useState("");

  return (
    <Input label={label} value={text} onChangeText={(text) => setText(text)} />
  );
};

export default TextInput;
