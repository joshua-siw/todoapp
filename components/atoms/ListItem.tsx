import * as React from "react";
import { Pressable } from "react-native";
import { List } from "react-native-paper";
import Badge from "./Badge";

interface ListItemProps {
  title: string;
  description: string;
}
const onPress = ({ navigation }) => {
  navigation.navigate("Details");
};
const ListItem = ({ title, description, icon }) => (
  <Pressable onPress={onPress}>
    <List.Item
      title={title}
      description={description}
      right={(props) => <Badge title="fs" value={4} />}
    />
  </Pressable>
);

export default ListItem;
