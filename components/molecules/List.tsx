import { View } from "react-native";
import ListItem from "../atoms/ListItem";
import { ScrollView } from "react-native-gesture-handler";

const List = ({ navigation }) => (
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

export default List;
