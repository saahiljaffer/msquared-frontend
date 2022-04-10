import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../components/Nav";
import PageContainer from "../../components/PageContainer";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  position: absolute;
  left: 0;
  margin-left: 20px;
  width: 32px;
`;

const MainTitle = styled.img`
  text-align: center;
  font-family: "Eu Alonira";
  font-weight: normal;
  font-size: 2em;
  color: black;
`;

function PageWithNav({ children }) {
  return (
    <>
      <Nav>
        <StyledLink to="/">
          <FontAwesomeIcon icon="fa-house" size="lg" />
        </StyledLink>

        <MainTitle src="/images/logo.png" width="64px" height="64px" />
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
