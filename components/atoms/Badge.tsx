import * as React from "react";
import { Badge as InfoBadge } from "react-native-paper";

interface BadgeProps {
  title: string;
  value: number;
}

const daysLeft = ({ date }) => {
  console.log(date);
};

const badgeValue = ({ date }) => {};
const Badge = ({ date }) => <InfoBadge>{date}</InfoBadge>;

export default Badge;
