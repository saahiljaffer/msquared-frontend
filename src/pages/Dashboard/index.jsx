import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S2 } from "../../components/Fonts";
import Button from "../../components/Button";
import Countdown from "../../components/Countdown";
import useStore from "../../store";
import { useGetParty } from "../../api";
import NavBar from "../../components/NavBar";

const MainTitle = styled.h1`
  font-size: var(--font-size-fluid-2);
  font-weight: ${(props) => props.theme.fonts.h1.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
  text-align: center;
`;

const SubTitle = styled(S2)``;

const DaysLeft = styled(Countdown)`
  text-align: center;
`;

const ButtonGroupItem = styled(Link)`
  text-decoration: none;
`;

const ButtonGroupContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const WEDDING_DATE = new Date(2022, 5, 4);
const TODAY = new Date();

function Landing() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data } = useGetParty(chosenPartyId);

  return (
    <>
      <NavBar showHome={false} />
      <Container>
        <MainTitle>Maysum & Malika 2022</MainTitle>
        <DaysLeft fromDate={TODAY} toDate={WEDDING_DATE} />
        <SubTitle>
          Welcome to our wedding website. We are so excited to celebrate with
          you all! As our big day is soon approaching, we would greatly
          appreciate it if you could kindly take a few minutes to RSVP using the
          below tab, by May 7, 2022.
        </SubTitle>
        <ButtonGroupContainer>
          {data && data?.can_see_mendhi && (
            <StyledLink to="/mendhi">
              <Button variant="secondary">Mendhi</Button>
            </StyledLink>
          )}
          <Link to="/nikkah">
            <Button variant="secondary">Nikkah</Button>
          </Link>
          {data && data?.can_see_reception && (
            <ButtonGroupItem to="/reception">
              <Button variant="secondary">Reception</Button>
            </ButtonGroupItem>
          )}
        </ButtonGroupContainer>

        <StyledLink to="/contact">
          <Button variant="secondary">Questions</Button>
        </StyledLink>

        <StyledLink to="/rsvp">
          <Button>RSVP</Button>
        </StyledLink>

        <Image src="/images/splash.png" alt="" />
      </Container>
    </>
  );
}

export default Landing;
