import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { H2 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer/PageContainer";

const MainTitle = styled(H2)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

function PageWithNav({ children }) {
  const navigate = useNavigate;
  return (
    <>
      <Nav>
        <MainTitle
          onClick={() => {
            navigate.push("/");
          }}
        >
          Maysum and Malika
        </MainTitle>
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
