import * as React from 'react';
import { Badge as InfoBadge } from 'react-native-paper';

const Badge = (props: { title: String,value: any; }) => (
  <InfoBadge>{props.value}</InfoBadge>
);

export default Badge;