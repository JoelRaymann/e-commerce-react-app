import React from "react";
// import styled components
import { CustomButtonStyles } from "./custom-button.styles";

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <CustomButtonStyles {...otherButtonProps}>{children}</CustomButtonStyles>
  );
};

export default CustomButton;
