import styled, { css } from "styled-components";

/**
 * Function to set Button primary and secondary button and text colors.
 * Primary colors are for the button before hover
 * Secondary colors are for button:onhover
 *
 * @param {String} primaryColor - A hexadecimal color string for the primary button color.
 * @param {String} primaryTextColor - A hexadecimal color string for the primary button text color.
 * @param {String} secondaryColor - A hexadecimal color string for the secondary button color.
 * @param {String} secondaryTextColor - A hexadecimal color string for the secondary button text color.
 *
 * @returns {CSS} - A styled CSS component
 */
const setButtonColor = (
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  inverted = false
) => {
  return css`
    background-color: ${primaryColor};
    color: ${primaryTextColor};
    border: ${inverted ? `1px solid ${primaryTextColor}` : `none`};

    &:hover {
      background-color: ${secondaryColor};
      color: ${secondaryTextColor};
      border: ${inverted ? `none` : `1px solid ${primaryColor}`};
      transform: scale(1.025);
    }
  `;
};

// Function for apply different button styles based on the classname,
// if no classname, then param: primary and secondary colors are used
// to render the button styles
const ButtonColorStyles = (props) => {
  // Handle special class styles
  if (props.specialClassStyle) {
    switch (props.specialClassStyle) {
      case "google-sign-in":
        return setButtonColor("#4285f4", "white", "white", "#4285f4");
      case "inverted-button":
        return setButtonColor("white", "black", "black", "white", true);
      default:
        return setButtonColor("black", "white", "white", "black");
    }
  } else if (
    props.primaryColor &&
    props.primaryTextColor &&
    props.secondaryColor &&
    props.secondaryTextColor
  ) {
    const {
      primaryColor,
      primaryTextColor,
      secondaryColor,
      secondaryTextColor,
    } = props;
    return setButtonColor(
      primaryColor,
      primaryTextColor,
      secondaryColor,
      secondaryTextColor
    );
  } else {
    return setButtonColor("black", "white", "white", "black");
  }
};

export const CustomButtonStyles = styled.button`
  min-width: 45%;
  width: auto;
  height: 50px;
  letter-spacing: 0.05em;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border-radius: 4px;
  cursor: pointer;
  transition: 500ms ease all;
  display: flex;
  justify-content: center;

  ${(props) => ButtonColorStyles(props)}
`;
