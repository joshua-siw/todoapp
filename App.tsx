import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import Card from './components/molecules/Card';
import Badge from './components/atoms/Badge';

export default function App() {
  return (
    <View style={styles.container}>
      <Card title="de"></Card>
      <Badge title="test" value={2}></Badge>
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
