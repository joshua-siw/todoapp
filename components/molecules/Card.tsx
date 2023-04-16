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
  storeData("hello", title);
};

const LeftContent = (props) => <Avatar.Icon icon="star" {...props} />;

const Card = ({ title }) => (
  <ListCard>
    <ListCard.Title title={title} />
    <ListCard.Content>
      <TextInput label="Todo title" />
      <DatePicker />
      <Button title={"save"} onPress={() => saveTodoElement(title)}></Button>
    </ListCard.Content>
  </ListCard>
);

export default Card;
