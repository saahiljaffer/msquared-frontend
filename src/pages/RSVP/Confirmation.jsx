import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { S1 } from "../../components/Fonts";
import GuestDetails from "./GuestDetails";
import { useGetGuests } from "../../api";
import useStore from "../../store";
import LoadingIndicator from "../../components/LoadingIndicator";
import Button from "../../components/Button";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeading = styled(S1)`
  margin-bottom: 0.25rem;
`;

function Confirmation() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, isLoading } = useGetGuests(chosenPartyId);

  return (
    <>
      <HeadingContainer>
        <MainHeading>You are all set!</MainHeading>
      </HeadingContainer>
      {isLoading && <LoadingIndicator />}
      {data &&
        data.map((guest) => <GuestDetails key={guest.pk} guest={guest} />)}
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </>
  );
}

export default Confirmation;
