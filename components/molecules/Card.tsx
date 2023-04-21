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
import {
  addTodoEntry,
  dbConnection,
  updateTodoEntry,
} from "../../functions/db-service";

interface CardProps {
  title: string;
}

const db = dbConnection();

const saveTodoElement = (title: string, completed, date, id?) => {
  console.log("storing data");
  console.log(title + completed + date + id);
  if (id) {
    console.log("updating entry" + typeof id);
    updateTodoEntry("1", false, "go outide", "1", db)
      .then((success) => {
        console.log(
          `Todo update was ${success ? "successful" : "unsuccessful"}`
        );
      })
      .catch((error) => {
        console.error(`Error updating todo: ${error}`);
      });
    // updateTodoEntry(date, completed, title, id.toString(), db)
    //   .then((success) => {
    //     console.log(
    //       `Todo update was ${success ? "successful" : "unsuccessful"}`
    //     );
    //   })
    //   .catch((error) => {
    //     console.error(`Error updating todo: ${error}`);
    //   });
    // todo update note or trigger getAllNotes reload
  } else {
    addTodoEntry(date, completed, title, db);
    console.log("adding db entry");
    // todo delete note
  }
};

interface todoObject {
  date: Date;
  task: string;
}

const LeftContent = (props) => <Avatar.Icon icon="star" {...props} />;

const Card = ({ route, navigation }) => {
  const { title, ids, completed, date } = route.params;

  const [dates, setDate] = useState(new Date());

  const [checked, setChecked] = useState(completed);

  const [titles, setTitle] = useState(title);

  return (
    <ListCard>
      <ListCard.Title title={titles} />
      <ListCard.Content>
        <TextInput label={titles} onChangeText={(text) => setTitle(text)} />
        <DatePicker date={dates} setDate={setDate} />
        <Button
          title={"save"}
          onPress={() => saveTodoElement(titles, checked, dates, ids)}
          icon={undefined}
        ></Button>
        <Button
          onPress={() => console.log(dates)}
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
