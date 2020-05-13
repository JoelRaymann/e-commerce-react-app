import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => {
  return (
    <div className="form-group">
      <input
        className={`form-input ${
          otherFormInputProps.value.length ? "erase-border" : ""
        }`}
        onChange={handleChange}
        {...otherFormInputProps}
      />
      {label ? (
        //   checks if user inputs something. If so, add shrink css class to shrink label
        <label
          className={`${
            otherFormInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
