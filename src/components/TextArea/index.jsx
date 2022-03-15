import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { B1 } from "../Fonts";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled(B1)`
  margin-bottom: 0.5rem;
`;

const StyledTextArea = styled.textarea`
  width: fill-available;
  height: 2rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.foreground.quintenary};
  font-size: ${(props) => props.theme.fonts.b1.size};
  font-weight: ${(props) => props.theme.fonts.b1.weight};
  letter-spacing: ${(props) => props.theme.fonts.b1.letterspacing};
  color: ${(props) => props.theme.colors.foreground.secondary};
  border: none;
  border-radius: 0.25rem;
  ::placeholder {
    color: ${(props) => props.theme.colors.foreground.tertiary};
  }
`;

function TextArea({ label, placeholder, input, rows }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledTextArea rows={rows} {...input} placeholder={placeholder} />
    </Container>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape.isRequired,
  rows: PropTypes.number.isRequired,
};

export default TextArea;
