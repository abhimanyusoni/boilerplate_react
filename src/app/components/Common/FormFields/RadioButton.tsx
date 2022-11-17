import React from "react";

const RadioButton = ({
  field,
  label,
  name,
  id,
  value,
  options,
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <>
      <div className="radio_parent">
        <input
          type="radio"
          id={id}
          {...field}
          {...props}
          className="radio_custom"
          value={value}
        />{" "}
        <label className="radio_label" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
