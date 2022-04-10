import PropTypes from "prop-types";
import styled from "styled-components";

export const STYLES = {
  DEFAULT: "default",
  SECONDARY: "secondary",
};

const getBackgroundColor = (props) => {
  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
      return props.theme.colors.background.secondary;
    case STYLES.SECONDARY:
      return props.theme.colors.background.tertiary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getDisabledBackgroundColor = (props) => {
  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.quintenary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getFontColor = (props) => {
  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
      return props.theme.colors.foreground.default;
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.quintenary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getDisabledFontColor = (props) => {
  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.tertiary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const StyledButton = styled.button`
  min-height: 2rem;
  border-radius: 0.25rem;
  width: 100%;
  font-size: ${(props) => props.theme.fonts.button.size};
  font-weight: ${(props) => props.theme.fonts.button.weight};
  text-transform: uppercase;
  background: ${(props) =>
    props.disabled
      ? getDisabledBackgroundColor(props)
      : getBackgroundColor(props)};
  color: ${(props) =>
    props.disabled ? getDisabledFontColor(props) : getFontColor(props)};
  padding-left: 1rem;
  padding-right: 1rem;
  border: none;
  cursor: pointer;

  :disabled {
    pointer-events: none;
  }
`;

StyledButton.propTypes = {
  buttonStyle: PropTypes.oneOf([STYLES.DEFAULT, STYLES.SECONDARY]),
};

StyledButton.defaultProps = {
  buttonStyle: STYLES.DEFAULT,
  type: "button",
};

export default StyledButton;
