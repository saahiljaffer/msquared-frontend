import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getBackgroundColor = (theme, variant) => {
  switch (variant) {
    case "success":
      return theme.colors.background.quaternary;
    case "error":
      return theme.colors.danger.default;
    case "warn":
      return theme.colors.warning.default;
    case "default":
    default:
      return theme.colors.background.default;
  }
};

const getFontColor = (theme, variant) => {
  switch (variant) {
    case "success":
      return theme.colors.background.default;
    case "error":
      return theme.colors.danger.verylight;
    case "warn":
      return theme.colors.warning.verylight;
    case "default":
    default:
      return theme.colors.foreground.default;
  }
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    getBackgroundColor(props.theme, props.variant)};
  color: ${(props) => getFontColor(props.theme, props.variant)};
`;

function Alert({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Alert;
