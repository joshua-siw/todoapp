import * as React from 'react';
import { Badge as InfoBadge } from 'react-native-paper';

interface BadgeProps {
  title: string,
  value: number
}

const Badge = ({ title, value }) => (
  <InfoBadge>{ value }</InfoBadge>
);

export default Badge;