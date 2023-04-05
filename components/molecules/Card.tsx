import * as React from "react";
import {
  Avatar,
  Button,
  Card as ListCard,
  TextInput,
} from "react-native-paper";
import Text from "../atoms/Text";
import { DatePicker } from "./DatePicker";

interface CardProps {
  title: string;
}

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Card = ({ title }) => (
  <ListCard>
    <ListCard.Title title={title} subtitle="Card Subtitle" left={LeftContent} />
    <ListCard.Content>
      <TextInput label="s" />
      <DatePicker></DatePicker>
    </ListCard.Content>
  </ListCard>
);

export default Card;
