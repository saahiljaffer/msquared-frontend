import { update } from "lodash";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetGuests, usePostGuests } from "../../api";
import { H5, S1 } from "../../components/Fonts";
import useStore from "../../store";
import SingleGuestForm from "./SingleGuestForm";

const CurrentGuestHeader = styled.div`
  margin-bottom: 1rem;
`;

const GuestName = styled(H5)`
  margin-bottom: 0.25rem;
`;

const GuestNumberIndicator = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.tertiary};
`;

function GuestsForm() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, isLoading } = useGetGuests(chosenPartyId);
  const postGuests = usePostGuests();
  const navigate = useNavigate();
  const [currentGuestIdx, setCurrentGuestIdx] = useState(0);
  const numberOfGuests = data?.length;
  const [updatedGuests, setUpdatedGuests] = useState([]);

  const getGuestFormCancelBtnLabel = () =>
    currentGuestIdx > 0 ? "Previous" : "Cancel";

  const initialGuestValues =
    updatedGuests[currentGuestIdx] || (data && data[currentGuestIdx]) || {};

  const currentGuest = data && data[currentGuestIdx];
  const guestNumberIndicatorText = `${currentGuestIdx + 1}/${numberOfGuests}`;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <CurrentGuestHeader>
        <GuestName>{`${currentGuest.fields.first_name} ${currentGuest.fields.last_name}`}</GuestName>
        <GuestNumberIndicator>{guestNumberIndicatorText}</GuestNumberIndicator>
      </CurrentGuestHeader>
      <SingleGuestForm
        onSubmit={(values) => {
          const currentUpdatedGuests = updatedGuests;

          const updatedGuest = {
            ...currentGuest,
            fields: {
              ...currentGuest.fields,
              is_attending: values.is_attending,
              is_attending_reception: values.is_attending_reception,
            },
          };

          const alreadyUpdatedIdx = currentUpdatedGuests.findIndex(
            (updated) => updated.pk === updatedGuest.pk
          );
          if (alreadyUpdatedIdx > -1) {
            currentUpdatedGuests.splice(alreadyUpdatedIdx, 1);
          }

          if (currentGuestIdx === numberOfGuests - 1) {
            postGuests.mutate({
              chosenPartyId,
              updatedGuests: [...updatedGuests, updatedGuest],
            });
          } else {
            setUpdatedGuests([...updatedGuests, updatedGuest]);
            setCurrentGuestIdx((prevIndex) => prevIndex + 1);
          }
        }}
        onCancel={() => {
          if (currentGuestIdx - 1 >= 0) {
            setCurrentGuestIdx((prevIndex) => prevIndex - 1);
          } else {
            navigate("/");
          }
        }}
        cancelBtnLabel={getGuestFormCancelBtnLabel}
        initialValues={initialGuestValues}
        currentGuest={currentGuest}
        guestNumberIndicatorText={guestNumberIndicatorText}
      />
    </>
  );
}

export default GuestsForm;
