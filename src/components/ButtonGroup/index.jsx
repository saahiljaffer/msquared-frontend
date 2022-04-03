import React from "react";
import styled from "styled-components";

const ButtonGroupItem = styled.div`
  width: 100%;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "flex-end")};
  margin-bottom: 1rem;

  width: 100%;

  ${ButtonGroupItem} {
    margin-right: 0.5rem;

    :last-child {
      margin-right: 0;
    }
  }
`;

const VerticalButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-bottom: 1rem;

  ${ButtonGroupItem} {
    margin-bottom: 1rem;

    :last-child {
      margin-bottom: none;
    }
  }
`;

const btnGroupContainerWithWrappedChildren = (
  Container,
  { children, ...otherProps }
) => (
  <Container {...otherProps}>
    {React.Children.map(children, (child) => (
      <ButtonGroupItem>
        {React.cloneElement(child, child.props)}
      </ButtonGroupItem>
    ))}
  </Container>
);

const ButtonGroup = (props) =>
  btnGroupContainerWithWrappedChildren(ButtonGroupContainer, props);

const VerticalButtonGroup = (props) =>
  btnGroupContainerWithWrappedChildren(VerticalButtonGroupContainer, props);

export { ButtonGroup, VerticalButtonGroup };
