import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { useState } from "react";
import { Avatar, Card as ListCard, TextInput } from "react-native-paper";
import storeData from "../../functions/allFunctions";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import DatePicker from "./DatePicker";

interface CardProps {
  title: string;
}

const saveTodoElement = (title: string) => {
  console.log("storing data");
  storeData("hello", "hi");
};

interface todoObject {
  date: Date;
  task: string;
}

const LeftContent = (props) => <Avatar.Icon icon="star" {...props} />;

const Card = ({ title }) => {
  const [date, setDate] = useState(new Date());

  return (
    <ListCard>
      <ListCard.Title title={title} />
      <ListCard.Content>
        <TextInput label="Todo title" />
        <DatePicker date={date} setDate={setDate} />
        <Button
          title={"save"}
          onPress={() => saveTodoElement(title)}
          icon={undefined}
        ></Button>
        <Button
          onPress={() => console.log(date)}
          title={undefined}
          icon={"bug"}
        />
      </ListCard.Content>
    </ListCard>
  );
};

export default Card;
