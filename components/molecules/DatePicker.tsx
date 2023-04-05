import { useState } from "react";
import { Platform } from "react-native/Libraries/Utilities/Platform";
import DateTimePicker from "@react-native-community/datetimepicker";
// import Button from "../atoms/Button";
import { View, Text, Alert } from "react-native";
import Button from "../atoms/Button";

export const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    // if (Platform.OS === "android") {
    //   setShow(false);
    //   // for iOS, add a button that closes the picker
    // }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const consoleLogTest = () => {
    console.log("hello");
  };

  return (
    <View>
      <Button onPress={consoleLogTest} title="Set Date" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
