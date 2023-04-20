import * as React from "react";
import { Pressable } from "react-native";
import { List } from "react-native-paper";
import Badge from "./Badge";

interface ListItemProps {
  title: string;
  description: string;
}

const ListItem = ({ title, description, icon, navigation, id }) => (
  <Pressable onPress={() => navigation.navigate("Details")}>
    <List.Item
      id={id}
      title={title}
      description={description}
      right={(props) => <Badge title="fs" value={4} />}
    />
  </Pressable>
);

export default ListItem;
