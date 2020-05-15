import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  additionClassName,
  inverted,
  ...otherCustomButtonProps
}) => {
  return (
    <button
      className={`custom-button ${additionClassName} ${
        inverted ? "inverted-button" : null
      }`}
      {...otherCustomButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
