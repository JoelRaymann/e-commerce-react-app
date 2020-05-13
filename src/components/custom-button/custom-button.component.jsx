import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  additionClassName,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`custom-button ${additionClassName}`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
