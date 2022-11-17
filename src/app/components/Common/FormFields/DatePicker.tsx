import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  field,
  label,
  name,
  id,
  value,
  options,
  onChange,
  //   form: { touched, errors },
  ...props
}: any) => {
  const handleChange = () => {};
  const [startDate, setStartDate] = useState();
  return (
    <>
      {label !== "" ? <p className="mb-2 form_label">{label}</p> : ""}
      <ReactDatePicker
        {...field}
        {...props}
        name={name}
        className="input_base"
        selected={startDate}
        onChange={(date: any) => {
          onChange(date);
          setStartDate(date);
        }}
      />
    </>
  );
};

export default DatePicker;
