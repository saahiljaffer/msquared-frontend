/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { H3 } from "../../components/Fonts/Secondary";
import PageContainer from "../../components/PageContainer/PageContainer";
// import { HOME, getTitleByPath } from "../../routes/routes";

class PageWithNav extends Component {
  goToHome = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <Nav>
          <H3 onClick={this.goToHome}>Go Home</H3>
        </Nav>
        <PageContainer>{children}</PageContainer>
      </>
    );
  }
}

export default PageWithNav;
