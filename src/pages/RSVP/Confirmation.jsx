import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { H5, S1 } from "../../components/Fonts";
import Button from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import GuestDetails from "./GuestDetails";
import { useGetGuests } from "../../api";
import useStore from "../../store";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeading = styled(H5)`
  margin-bottom: 0.25rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const SubHeading = styled(S1)``;

function Confirmation() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  // eslint-disable-next-line no-unused-vars
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
        <Button>
          <StyledLink to="/">Back to home</StyledLink>
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Confirmation;
