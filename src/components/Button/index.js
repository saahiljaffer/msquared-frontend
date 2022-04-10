import PropTypes from "prop-types";
import styled from "styled-components";

export const STYLES = {
  DEFAULT: "default",
  SECONDARY: "secondary",
};

const getBackgroundColor = (props) => {
  switch (props.variant) {
    case STYLES.DEFAULT:
      return props.theme.colors.background.secondary;
    case STYLES.SECONDARY:
      return props.theme.colors.background.tertiary;
    default:
      throw new Error(`Invalid button style: ${props.variant}`);
  }
};

const getDisabledBackgroundColor = (props) => {
  switch (props.variant) {
    case STYLES.DEFAULT:
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.quintenary;
    default:
      throw new Error(`Invalid button style: ${props.variant}`);
  }
};

const getFontColor = (props) => {
  switch (props.variant) {
    case STYLES.DEFAULT:
      return props.theme.colors.foreground.default;
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.default;
    default:
      throw new Error(`Invalid button style: ${props.variant}`);
  }
};

const getDisabledFontColor = (props) => {
  switch (props.variant) {
    case STYLES.DEFAULT:
    case STYLES.SECONDARY:
      return props.theme.colors.foreground.default;
    default:
      throw new Error(`Invalid button style: ${props.variant}`);
  }
};

const getWidth = (props) => {
  switch (props.variant) {
    case STYLES.DEFAULT:
      return "100%";
    case STYLES.SECONDARY:
      return "100%";
    default:
      throw new Error(`Invalid button style: ${props.variant}`);
  }
};

const StyledButton = styled.button`
  min-height: 2rem;
  border-radius: 0.25rem;
  width: ${(props) => getWidth(props)};
  font-family: "Niveau Grotesk", sans-serif;
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
  text-decoration: none;

  :disabled {
    pointer-events: none;
  }
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf([STYLES.DEFAULT, STYLES.SECONDARY]),
};

StyledButton.defaultProps = {
  variant: STYLES.DEFAULT,
  type: "button",
};

export default StyledButton;
