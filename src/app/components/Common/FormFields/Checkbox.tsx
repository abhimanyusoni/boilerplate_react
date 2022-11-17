import React from "react";

const Checkbox = ({
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
      <div className="checkbox_parent">
        <input
          type="checkbox"
          id={id}
          {...field}
          {...props}
          value={value}
          className="checkbox_custom"
        />{" "}
        <label htmlFor={id} className="checkbox_label">
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
