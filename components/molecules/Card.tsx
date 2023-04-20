import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useState } from "react";
import {
  Avatar,
  Card as ListCard,
  TextInput,
  Checkbox,
} from "react-native-paper";
import storeData from "../../functions/allFunctions";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import DatePicker from "./DatePicker";
import { addTodoEntry } from "../../functions/db-service";

interface CardProps {
  title: string;
}

const saveTodoElement = (title: string, completed, date, id?) => {
  console.log("storing data");
  if (id) {
  } else {
    addTodoEntry("13", true, "task", db);
  }
};

interface todoObject {
  date: Date;
  task: string;
}

const LeftContent = (props) => <Avatar.Icon icon="star" {...props} />;

const Card = ({ route, navigation }) => {
  const { title, id, completed, date } = route.params;

  const [dates, setDate] = useState(new Date());

  const [checked, setChecked] = useState(completed);

  const [titles, setTitle] = useState(title);

  return (
    <ListCard>
      <ListCard.Title title={titles} />
      <ListCard.Content>
        <TextInput label={titles} />
        <DatePicker date={dates} setDate={setDate} />
        <Button
          title={"save"}
          onPress={() => saveTodoElement(title, completed, date)}
          icon={undefined}
        ></Button>
        <Button
          onPress={() => console.log(date)}
          title={undefined}
          icon={"bug"}
        />
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </ListCard.Content>
    </ListCard>
  );
};

export default Card;
