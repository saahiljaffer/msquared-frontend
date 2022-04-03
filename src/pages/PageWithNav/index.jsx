import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import PageContainer from "../../components/PageContainer";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MainTitle = styled.h1`
  text-align: center;
  font-family: "Eu Alonira";
  font-weight: normal;
  font-size: 1.5em;
  color: black;
`;

function PageWithNav({ children }) {
  return (
    <>
      <Nav>
        <StyledLink to="/">
          <MainTitle>Maysum and Malika</MainTitle>
        </StyledLink>
      </Nav>
      <PageContainer>{children}</PageContainer>
    </>
  );
}

PageWithNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageWithNav;
