import * as React from 'react';
import { Avatar, Button, Card as ListCard, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Card = (props: { title: String; }) => (
  <ListCard>
    <ListCard.Title title={props.title} subtitle="Card Subtitle" left={LeftContent} />
    <ListCard.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </ListCard.Content>
    <ListCard.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <ListCard.Actions>
        props.action
    </ListCard.Actions>
  </ListCard>
);

export default Card;