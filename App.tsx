import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from "react";
import Text from './components/atoms/Text'
import Card from './components/molecules/Card';
import Badge from './components/atoms/Badge';
import { List } from 'react-native-paper';
import MyComponent from './components/atoms/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge" content="hello react native"></Text>
      <Badge value={6} title="test"></Badge>
      
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
