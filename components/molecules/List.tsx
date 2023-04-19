import { View } from "react-native";
import ListItem from "../atoms/ListItem";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const List = ({ navigation }) => {
  return (
    <ScrollView>
      <ListItem
        title={"wörter"}
        description={"wort"}
        icon={"bomb"}
        navigation={navigation}
        id={"1"}
      ></ListItem>
    </ScrollView>
  );
};

export default List;
