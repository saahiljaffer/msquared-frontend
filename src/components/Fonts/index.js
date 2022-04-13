import styled from "styled-components";

export const S1 = styled.p`
  font-size: ${(props) => props.theme.fonts.s1.size};
  font-weight: ${(props) => props.theme.fonts.s1.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  text-align: center;
`;

export const S2 = styled.p`
  font-size: ${(props) => props.theme.fonts.s2.size};
  font-weight: ${(props) => props.theme.fonts.s2.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  text-align: center;
`;

export const Button = styled.span`
  font-size: ${(props) => props.theme.fonts.button.size};
  font-weight: ${(props) => props.theme.fonts.button.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  text-transform: uppercase;
`;
