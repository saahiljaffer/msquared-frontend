import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S1 } from "../../components/Fonts";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles,
} from "../../components/Button";
import Countdown from "../../components/Countdown";
import useStore from "../../store";
import { useGetParty } from "../../api";

const SubTitle = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.secondary};
  margin-bottom: 1rem;
  text-align: center;
`;

const DaysLeft = styled(Countdown)`
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const ButtonGroupItem = styled(Link)`
  text-decoration: none;
`;

const VerticalButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-bottom: 1rem;

  ${ButtonGroupItem} {
    margin-bottom: 1rem;

    :last-child {
      margin-bottom: none;
    }
  }
`;

const WEDDING_DATE = new Date(2022, 5, 4);
const TODAY = new Date();

function Landing() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data } = useGetParty(chosenPartyId);

  return (
    <>
      <DaysLeft fromDate={TODAY} toDate={WEDDING_DATE} />
      <SubTitle>
        Welcome to our wedding website. We have created this website as a
        helpful resource for all of the need-to-know details in the lead up to
        our big day. Here you will find the schedule for the day, venue
        directions, along with accommodation and transport options.
      </SubTitle>
      <SubTitle>
        Dont forget to RSVP and let us know about any dietary preferences too.
      </SubTitle>
      <SubTitle>
        We are so looking forward to celebrating with you all!
      </SubTitle>
      <VerticalButtonGroupContainer center>
        <ButtonGroupItem to="/nikkah">
          <Button buttonType={ButtonTypes.OUTLINE}>Nikkah</Button>
        </ButtonGroupItem>

        {data && data?.fields?.is_invited_reception && (
          <ButtonGroupItem to="/reception">
            <Button buttonType={ButtonTypes.OUTLINE}>Reception</Button>
          </ButtonGroupItem>
        )}

        <ButtonGroupItem to="/rsvp">
          <Button buttonStyle={ButtonStyles.OUTLINE}>RSVP</Button>
        </ButtonGroupItem>
      </VerticalButtonGroupContainer>
    </>
  );
}

export default Landing;
