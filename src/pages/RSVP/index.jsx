/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import { useNavigate } from "react-router-dom";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import GuestsForm from "./GuestsForm";
import Confirmation from "./Confirmation";
import useStore from "../../store";
import { useGetGuests, usePostGuests, useGetParty } from "../../api";

function RSVP() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const chosenParty = useGetParty(chosenPartyId).data;

  let partyResponded;
  if (chosenParty) {
    partyResponded = chosenParty.fields.has_responded;
  }

  const [loading, setLoading] = useState(false);
  const [partyNotFoundAlert, setPartyNotFoundAlert] = useState(null);
  const { data, isLoading } = useGetGuests(chosenPartyId);

  useEffect(() => {
    if (partyResponded && data) {
      if (partyNotFoundAlert) {
        alerts.close(partyNotFoundAlert);
      }
      setPartyNotFoundAlert(null);
      alerts.showSuccess(
        "You have already responded. Please find your details below."
      );
    }
  }, [partyResponded, data]);

  const navigate = useNavigate();
  const postGuests = usePostGuests();

  return (
    <>
      <AlertContainer template={AlertTemplate} closeButton={AlertCloseButton} />
      {loading && <LoadingIndicator />}
      {partyResponded}
      {!!chosenPartyId && !partyResponded && !!data && !loading && (
        <GuestsForm
          guests={data}
          updateGuests={(updatedGuests) => {
            postGuests.mutate({ chosenPartyId, updatedGuests });
          }}
          onCancel={() => {
            navigate("/");
          }}
        />
      )}
      {!!partyResponded && !loading && <Confirmation guests={data} />}
    </>
  );
}

export default RSVP;
