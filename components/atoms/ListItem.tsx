import * as React from "react";
import { Pressable } from "react-native";
import { List } from "react-native-paper";
import Badge from "./Badge";

interface ListItemProps {
  title: string;
  description: string;
}

const ListItem = ({
  title,
  description,
  icon,
  navigation,
  ids,
  completed,
  date,
}) => (
  <Pressable
    onPress={() =>
      navigation.navigate("Details", {
        title,
        ids,
        completed,
        date,
      })
    }
  >
    <List.Item
      title={title}
      description={undefined}
      right={(props) => <Badge date={date} />}
    />
  </Pressable>
);

export default ListItem;
