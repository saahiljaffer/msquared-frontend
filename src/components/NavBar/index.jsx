import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStore from "../../store";

const Nav = styled.nav`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  position: absolute;
  left: 0;
  margin-left: 0px;
`;

const StyledButton = styled.button`
  color: #000;
  position: absolute;
  right: 0;
  margin-right: 0px;
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

function NavBar({ showHome, showLogout }) {
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const setName = useStore((state) => state.setName);

  return (
    <Nav>
      {showHome && (
        <StyledLink to="/">
          <FontAwesomeIcon icon="fa-house" size="lg" />
        </StyledLink>
      )}

      <MainTitle src="/images/logo.png" width="64px" height="64px" />

      {showLogout && (
        <StyledButton
          onClick={() => {
            setChosenPartyId(null);
            setName(null);
          }}
          type="button"
        >
          <FontAwesomeIcon
            alt="logout"
            icon="fa-arrow-right-from-bracket"
            size="xl"
          />
        </StyledButton>
      )}
    </Nav>
  );
}

NavBar.propTypes = {
  showHome: PropTypes.bool,
  showLogout: PropTypes.bool,
};

NavBar.defaultProps = {
  showHome: true,
  showLogout: true,
};

export default NavBar;
