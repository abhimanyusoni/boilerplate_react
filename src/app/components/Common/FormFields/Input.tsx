import React from "react";

const Input = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  ...props
}: any) => {
  return (
    <>
      {label !== "" ? <p className="mb-2 form_label">{label}</p> : ""}
      <input {...field} {...props} className="input_base" />
    </>
  );
};

export default Input;
