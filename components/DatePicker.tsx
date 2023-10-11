"use client";
import { useState } from "react";
import { DatePicker } from "keep-react-demo";

const DatePickerComponent = () => {
  const [_, setDate] = useState<Date | null>(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

export default DatePickerComponent;
