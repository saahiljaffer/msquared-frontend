/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-cycle */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S1 } from "../../components/Fonts/Fonts";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles,
} from "../../components/Button";
import { VerticalButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import Countdown from "../../components/Countdown/Countdown";
import banner from "./Banner.jpg";

const Banner = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`;

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

const WEDDING_DATE = new Date(2022, 5, 4);
const TODAY = new Date();

function Landing() {
  return (
    <>
      <Banner src={banner} alt="Banner" />
      <DaysLeft fromDate={TODAY} toDate={WEDDING_DATE} />
      <SubTitle>
        Welcome to our wedding website. We've created this website as a helpful
        resource for all of the need-to-know details in the lead up to our big
        day. Here you'll find the schedule for the day, venue directions, along
        with accommodation and transport options.
      </SubTitle>
      <SubTitle>
        Don't forget to RSVP and let us know about any dietary preferences too.
      </SubTitle>
      <SubTitle>
        We are so looking forward to celebrating with you all!
      </SubTitle>
      <VerticalButtonGroup center>
        <Button buttonType={ButtonTypes.OUTLINE}>
          <Link to="/nikkah">Wedding Day</Link>
        </Button>
        <Button buttonType={ButtonTypes.OUTLINE}>
          <Link to="/reception">After Party</Link>
        </Button>
        <Button buttonStyle={ButtonStyles.OUTLINE}>
          <Link to="/rsvp">RSVP</Link>
        </Button>
      </VerticalButtonGroup>
    </>
  );
}

export default Landing;
