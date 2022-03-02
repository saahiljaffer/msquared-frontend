import React, { useState } from "react";
import styled from "styled-components";
import { H5, S1 } from "../../../components/Fonts/Fonts";
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

let GuestsForm = ({ guests, updateGuests, onCancel }) => {
  const [currentGuestIdx, setCurrentGuestIdx] = useState(0);
  const numberOfGuests = guests.length;
  const [updatedGuests, setUpdatedGuests] = useState([]);

  let getGuestFormCancelBtnLabel = () => {
    return currentGuestIdx > 0 ? "Previous" : "Cancel";
  };

  const initialGuestValues =
    updatedGuests[currentGuestIdx] || guests[currentGuestIdx] || {};

  const currentGuest = guests[currentGuestIdx];
  const guestNumberIndicatorText = `${currentGuestIdx + 1}/${numberOfGuests}`;

  return (
    <>
      <CurrentGuestHeader>
        <GuestName>{`${currentGuest.fields.first_name} ${currentGuest.fields.last_name}`}</GuestName>
        <GuestNumberIndicator>{guestNumberIndicatorText}</GuestNumberIndicator>
      </CurrentGuestHeader>
      <SingleGuestForm
        onSubmit={(values) => {
          const currentUpdatedGuests = [...updatedGuests];
          const currentGuest = guests[currentGuestIdx].pk;

          console.log(currentGuest);
          console.log({ ...values });

          const updatedGuest = {
            pk: currentGuest,
            ...values,
          };

          console.log(updatedGuest);

          const alreadyUpdatedIdx = currentUpdatedGuests.findIndex(
            (updated) => updated.pk === updatedGuest.pk
          );
          if (alreadyUpdatedIdx > -1) {
            currentUpdatedGuests.splice(alreadyUpdatedIdx, 1);
          }

          const newUpdatedGuests = [...currentUpdatedGuests, updatedGuest];
          console.log(newUpdatedGuests);

          if (currentGuestIdx === numberOfGuests - 1) {
            console.log("last guest, calling update");
            updateGuests(newUpdatedGuests);
          } else {
            setCurrentGuestIdx((prevIndex) => prevIndex + 1);
            setUpdatedGuests(newUpdatedGuests);
            console.log("guests updated", newUpdatedGuests);
          }
        }}
        onCancel={() => {
          if (currentGuestIdx - 1 >= 0) {
            setCurrentGuestIdx((prevIndex) => prevIndex - 1);
          } else {
            onCancel();
          }
        }}
        cancelBtnLabel={getGuestFormCancelBtnLabel}
        initialValues={initialGuestValues}
      />
    </>
  );
};

export default GuestsForm;
