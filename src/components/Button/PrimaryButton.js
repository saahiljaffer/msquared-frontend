import PropTypes from "prop-types";
import styled from "styled-components";

export const TYPES = {
  DEFAULT: "default",
  OUTLINE: "outline",
};

export const STYLES = {
  DEFAULT: "default",
  PRIMARY: "primary",
  ACCENT: "accent",
};

const getBorder = (props) => {
  if (props.buttonType === TYPES.OUTLINE) {
    return `1px solid ${props.theme.colors.foreground.secondary}`;
  }

  return "none";
};

const getDisabledBorder = (props) => {
  if (props.buttonType === TYPES.OUTLINE) {
    return `1px solid ${props.theme.colors.foreground.quaternary}`;
  }

  return "none";
};

const StyledButton = styled.button`
  min-height: 2rem;
  border-radius: 0.25rem;
  width: 100%;
  font-size: ${(props) => props.theme.fonts.button.size};
  font-weight: ${(props) => props.theme.fonts.button.weight};
  letter-spacing: ${(props) => props.theme.fonts.button.letterspacing};
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.foreground.secondary};
  color: ${(props) => props.theme.colors.foreground.default};
  padding-left: 1rem;
  padding-right: 1rem;
  border: ${(props) =>
    props.disabled ? getDisabledBorder(props) : getBorder(props)};
  cursor: pointer;

  :disabled {
    pointer-events: none;
  }
`;

StyledButton.propTypes = {
  buttonType: PropTypes.oneOf([TYPES.DEFAULT, TYPES.OUTLINE]),
  buttonStyle: PropTypes.oneOf([STYLES.DEFAULT, STYLES.PRIMARY, STYLES.ACCENT]),
};

StyledButton.defaultProps = {
  buttonType: TYPES.DEFAULT,
  buttonStyle: STYLES.DEFAULT,
  type: "button",
};

export default StyledButton;
