import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGetGuests, usePostGuests } from "../../api";
import { S1 } from "../../components/Fonts";
import LoadingIndicator from "../../components/LoadingIndicator";
import useStore from "../../store";
import SingleGuestForm from "./SingleGuestForm";

const CurrentGuestHeader = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const GuestName = styled(S1)`
  text-align: start;
  flex-grow: 1;
`;

const GuestNumberIndicator = styled(S1)``;

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
    return <LoadingIndicator />;
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
              is_attending_nikkah: values.is_attending_nikkah,
              is_attending_reception: values.is_attending_reception,
              is_attending_mendhi: values.is_attending_mendhi,
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
