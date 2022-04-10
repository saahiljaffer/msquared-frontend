import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../components/Nav";
import PageContainer from "../../components/PageContainer";
import useStore from "../../store";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  position: absolute;
  left: 0;
  margin-left: 20px;
`;

const StyledButton = styled.button`
  color: #000;
  position: absolute;
  right: 0;
  margin-right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MainTitle = styled.img`
  text-align: center;
  font-family: "Eu Alonira";
  font-weight: normal;
  font-size: 2em;
  color: black;
`;

function PageWithNav({ children }) {
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const setName = useStore((state) => state.setName);
  return (
    <>
      <Nav>
        <StyledLink to="/">
          <FontAwesomeIcon icon="fa-house" size="lg" />
        </StyledLink>

        <MainTitle src="/images/logo.png" width="64px" height="64px" />

        <StyledButton
          onClick={() => {
            setChosenPartyId(null);
            setName(null);
          }}
          type="button"
        >
          <FontAwesomeIcon icon="fa-arrow-right-from-bracket" size="lg" />
        </StyledButton>
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
