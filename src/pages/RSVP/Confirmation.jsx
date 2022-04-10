import React from "react";
import styled from "styled-components";
import { S1 } from "../../components/Fonts";
import GuestDetails from "./GuestDetails";
import { useGetGuests } from "../../api";
import useStore from "../../store";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeading = styled(S1)`
  margin-bottom: 0.25rem;
`;

function Confirmation() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading } = useGetGuests(chosenPartyId);

  return (
    <>
      <HeadingContainer>
        <MainHeading>You are all set!</MainHeading>
      </HeadingContainer>
      {data &&
        data.map((guest) => <GuestDetails key={guest.pk} guest={guest} />)}
    </>
  );
}

export default Confirmation;
