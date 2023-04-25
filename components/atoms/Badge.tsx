import * as React from "react";
import { View } from "react-native";
import { Badge as InfoBadge } from "react-native-paper";

interface BadgeProps {
  title: string;
  value: number;
}

const daysLeft = (date) => {
  const dateObj = new Date(date);
  const currentDate = new Date();
  const difference = dateObj.getTime() - currentDate.getTime();
  const remainingDays = Math.ceil(difference / 86400000);
  return remainingDays;
};

const badgeValue = ({ date }) => {
  const remainingDays = daysLeft(date);
  return remainingDays.toString();
};
const Badge = ({ date }) => {
  // const days = daysLeft(date);
  return (
    <View>
      {daysLeft(date) > 0 && <InfoBadge>{badgeValue(date)}</InfoBadge>}
    </View>
  );
};

export default Badge;
