import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import Button from "../atoms/Button";

export default ({ date, setDate }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onPress={() => setOpen(true)}
        title={undefined}
        icon={undefined}
      />
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
