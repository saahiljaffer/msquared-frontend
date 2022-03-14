import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { H5, S1 } from "../../components/Fonts/Fonts";
import Button, { TYPES } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup/ButtonGroup";
import GuestDetails from "./GuestDetails";
import { useGetGuests } from "../../api";
import useStore from "../../store";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeading = styled(H5)`
  margin-bottom: 0.25rem;
`;

const SubHeading = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.tertiary};
`;

function Confirmation() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, isLoading } = useGetGuests(chosenPartyId);

  return (
    <>
      <HeadingContainer>
        <MainHeading>Youre all set!</MainHeading>
        <SubHeading>
          Thank you for responding. We hope you have a wonderful time.
        </SubHeading>
      </HeadingContainer>
      {data &&
        data.map((guest) => <GuestDetails key={guest.pk} guest={guest} />)}

      <ButtonGroup right>
        <Button buttonType={TYPES.OUTLINE}>
          <Link to="/">Back to home</Link>
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Confirmation;
