import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useContext, useState } from "react";
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
  deleteTodoEntry,
  updateTodoEntry,
} from "../../functions/db-service";
import TodosContext from "../../context/todosContext";
import { View } from "react-native";

interface CardProps {
  title: string;
}

const db = dbConnection();

const deleteTodoElement = (id, { navigation }, context) => {
  console.log("delete entry");
  deleteTodoEntry(id, db).then();
  context.updateTodos();
  navigation.navigate("Todos");
};

const saveTodoElement = (
  title: string,
  completed,
  date: string,
  context,
  id?
) => {
  console.log("storing data");
  console.log(title + completed + date + id);
  if (id) {
    console.log("updating entry" + typeof id);
    updateTodoEntry(date, completed, title, id, db)
      .then((success) => {
        console.log(
          `Todo update was ${success ? "successful" : "unsuccessful"}`
        );
      })
      .catch((error) => {
        console.error(`Error updating todo: ${error}`);
      });
    // todo update note or trigger getAllNotes reload
  } else {
    addTodoEntry(date, completed, title, db);
    console.log("adding db entry");
  }
  context.updateTodos();
};

interface todoObject {
  date: Date;
  task: string;
}

const LeftContent = (props) => <Avatar.Icon icon="star" {...props} />;

const daysLeft = ({ date }) => {
  console.log(date);
};

const Card = ({ route, navigation }) => {
  const todosContext = useContext(TodosContext);
  const { title, ids, completed, date } = route.params;

  const [dates, setDate] = useState(date ? new Date(date) : new Date());

  const [checked, setChecked] = useState(completed);

  const [titles, setTitle] = useState(title);

  return (
    <ListCard>
      <ListCard.Title title={titles} />
      <ListCard.Content>
        <TextInput label={titles} onChangeText={(text) => setTitle(text)} />
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text content={"Completed"} variant={"headlineSmall"} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <DatePicker date={dates} setDate={setDate} />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title={undefined}
              onPress={() =>
                saveTodoElement(
                  titles,
                  checked,
                  dates.toString(),
                  todosContext,
                  ids
                )
              }
              icon={"file"}
            ></Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() =>
                deleteTodoElement(ids, { navigation }, todosContext)
              }
              title={undefined}
              icon={"delete"}
            />
          </View>
        </View>
      </ListCard.Content>
    </ListCard>
  );
};

export default Card;
