import React from "react";
import styled from "styled-components";
import { H2 } from "../../components/Fonts/Secondary";
import { S1 } from "../../components/Fonts/Fonts";
import Button, {
  TYPES as ButtonTypes,
  STYLES as ButtonStyles,
} from "../../components/Button/Button";
import { VerticalButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import Countdown from "../../components/Countdown/Countdown";
import { RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY } from "../../routes/routes";
import banner from "./Banner.jpg";
import { Link } from "react-router-dom";

const Banner = styled.img`
  margin-bottom: 1rem;
  width: 100%;
`;

const MainTitle = styled(H2)`
  margin-bottom: 0.5rem;
  text-align: center;
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

let Landing = () => {
  return (
    <>
      <Banner src={banner} alt="Banner" />
      <MainTitle>Maysum & Malika</MainTitle>
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
          <Link to={WEDDING_DAY.path}>Wedding Day</Link>
        </Button>
        <Button buttonType={ButtonTypes.OUTLINE}>
          <Link to={AFTER_PARTY.path}>After Party</Link>
        </Button>
        <Button buttonStyle={ButtonStyles.OUTLINE}>
          <Link to={RSVP_ROUTE.path}>RSVP</Link>
        </Button>
      </VerticalButtonGroup>
    </>
  );
};

export default Landing;
