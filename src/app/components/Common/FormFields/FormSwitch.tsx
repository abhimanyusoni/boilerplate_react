import React, { useState } from "react";
import Switch from "react-switch";

const FormSwitch = ({ checkedMark }: any) => {
  const [checked, setChecked] = useState(checkedMark);
  return (
    <div>
      <Switch
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
    </div>
  );
};

export default FormSwitch;
