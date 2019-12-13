import React from "react";

import { CheckboxProps } from "../index";

const Checkbox: React.SFC<CheckboxProps> = ({
  isCheckbox,
  isDisabled,
  label,
  defaultValue,
  onChange
}) => {
  const type = isCheckbox ? "checkbox" : "switch";
  const inputClass = isCheckbox ? "checkbox__box" : "switch__toggle";
  const labelClass = isCheckbox ? "checkbox__label" : "switch__label";
  const uniqueId = `${type}--${(Math.random() * 100000000).toFixed(0)}`;

  return (
    <div className={type}>
      <input
        defaultChecked={defaultValue}
        onChange={onChange}
        className={inputClass}
        type="checkbox"
        id={uniqueId}
        disabled={isDisabled}
      />
      <label className={labelClass} htmlFor={uniqueId}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;