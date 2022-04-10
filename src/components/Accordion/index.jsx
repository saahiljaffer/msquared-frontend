import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { S2 } from "../Fonts";

const Container = styled.div`
  border: ${(props) => `1px solid ${props.theme.colors.foreground.quaternary}`};
  padding: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  margin-top: 1rem;
`;

function Accordion({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded((expanded) => !expanded);
  };

  const icon = isExpanded ? "chevron-down" : "chevron-right";
  return (
    <Container onClick={toggleIsExpanded}>
      <TitleContainer>
        <S2>{title}</S2>
        <FontAwesomeIcon icon={icon} />
      </TitleContainer>

      {isExpanded && <ContentContainer>{children}</ContentContainer>}
    </Container>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Accordion;
