import React from "react";

const TextArea = ({
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
      {label ? <p className="mb-2">{label}</p> : ""}
      <textarea {...field} {...props} className="input_base textarea" />
    </>
  );
};

export default TextArea;
