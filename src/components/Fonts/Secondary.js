import styled from "styled-components";

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.fonts.h2.size};
  font-weight: ${(props) => props.theme.fonts.h2.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.fonts.h3.size};
  font-weight: ${(props) => props.theme.fonts.h3.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.fonts.h4.size};
  font-weight: ${(props) => props.theme.fonts.h4.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
`;

export const H5 = styled.h5`
  font-size: var(--font-size-fluid-2);
  font-weight: ${(props) => props.theme.fonts.h5.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
`;

export const H6 = styled.h6`
  font-size: ${(props) => props.theme.fonts.h6.size};
  font-weight: ${(props) => props.theme.fonts.h6.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
`;
