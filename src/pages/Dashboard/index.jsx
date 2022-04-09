import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S1 } from "../../components/Fonts";
import { H3 } from "../../components/Fonts/Secondary";
import Button from "../../components/Button";
import Countdown from "../../components/Countdown";
import useStore from "../../store";
import { useGetParty } from "../../api";

const MainTitle = styled(H3)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SubTitle = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.secondary};
  margin-bottom: 1rem;
`;

const DaysLeft = styled(Countdown)`
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const ButtonGroupItem = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const VerticalButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-top: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WEDDING_DATE = new Date(2022, 5, 4);
const TODAY = new Date();

function Landing() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const setName = useStore((state) => state.setName);
  const { data } = useGetParty(chosenPartyId);

  return (
    <Container>
      <MainTitle>Maysum & Malika 2022</MainTitle>
      <DaysLeft fromDate={TODAY} toDate={WEDDING_DATE} />
      <SubTitle>
        Welcome to our wedding website. We are so excited to celebrate with you
        all! As our big day is soon approaching, we would greatly appreciate it
        if you could kindly take a few minutes to RSVP using the below tab, by
        May 7, 2022.
      </SubTitle>
      <img src="/images/splash.png" alt="" width="300" height="500" />
      <VerticalButtonGroupContainer center>
        <ButtonGroupItem to="/nikkah">
          <Button>Nikkah</Button>
        </ButtonGroupItem>

        {data && data?.fields?.is_invited_reception && (
          <ButtonGroupItem to="/reception">
            <Button>Reception</Button>
          </ButtonGroupItem>
        )}

        {data && true && (
          <ButtonGroupItem to="/mendhi">
            <Button>Mendhi</Button>
          </ButtonGroupItem>
        )}
      </VerticalButtonGroupContainer>
      <VerticalButtonGroupContainer>
        <ButtonGroupItem to="/rsvp">
          <Button>RSVP</Button>
        </ButtonGroupItem>

        <Button
          onClick={() => {
            setChosenPartyId(null);
            setName(null);
          }}
        >
          Logout
        </Button>
      </VerticalButtonGroupContainer>
    </Container>
  );
}

export default Landing;
