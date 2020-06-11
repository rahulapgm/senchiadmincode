import React from "react";

export const Input = ({
  type,
  id,
  name,
  labelContent,
  onChange = () => {},
  placeholder = "",
  required = false,
  pattern = "",
  className = "",
}) => {
  return (
    <React.Fragment>
      {labelContent && <label for={id}>{labelContent}</label>}
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        className={className}
      />
    </React.Fragment>
  );
};

export default Input;
