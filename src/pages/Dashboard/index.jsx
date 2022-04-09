import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S2 } from "../../components/Fonts";
import { H5 } from "../../components/Fonts/Secondary";
import Button from "../../components/Button";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Countdown from "../../components/Countdown";
import useStore from "../../store";
import { useGetParty } from "../../api";

const MainTitle = styled(H5)`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SubTitle = styled(S2)`
  margin-bottom: 1rem;
`;

const DaysLeft = styled(Countdown)`
  text-align: center;
  margin-bottom: 1rem;
`;

const ButtonGroupItem = styled(Link)`
  text-decoration: none;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FullButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-top: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
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
      <ButtonGroupContainer>
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
      </ButtonGroupContainer>
      <FullButtonGroupContainer>
        <ButtonGroupItem style={{ width: "100%" }} to="/rsvp">
          <PrimaryButton>RSVP</PrimaryButton>
        </ButtonGroupItem>

        <PrimaryButton
          onClick={() => {
            setChosenPartyId(null);
            setName(null);
          }}
        >
          Logout
        </PrimaryButton>
      </FullButtonGroupContainer>
      <Image src="/images/splash.png" alt="" />
    </Container>
  );
}

export default Landing;
