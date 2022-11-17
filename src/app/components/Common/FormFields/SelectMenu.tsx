import React from "react";

const SelectMenu = ({
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
      {label !== "" ? <p className="mb-2 form_label">{label}</p> : ""}
      <select {...field} {...props} className="input_base">
        {options.map((one: any) => {
          return (
            <option
              disabled={(options[0] === one) === true}
              selected={options[0] === one}
              value={options[0] === one ? "" : one}
            >
              {one}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectMenu;
