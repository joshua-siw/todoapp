import { View } from "react-native";
import ListItem from "../atoms/ListItem";
import { ScrollView } from "react-native-gesture-handler";




const List = () => (
  <ScrollView>
    <ListItem title={"wörter"} description={"wort"} icon={"bomb"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"star"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"folder"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"bomb"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"star"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"folder"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"bomb"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"star"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"folder"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"bomb"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"star"}></ListItem>
    <ListItem title={"wörter"} description={"wort"} icon={"folder"}></ListItem>
  </ScrollView>
);

export default List;
