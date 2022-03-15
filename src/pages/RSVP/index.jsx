import React from "react";
import { AlertContainer } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator";
import GuestsForm from "./GuestsForm";
import Confirmation from "./Confirmation";
import useStore from "../../store";
import { useGetParty } from "../../api";

function RSVP() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, loading } = useGetParty(chosenPartyId);

  let partyResponded;
  if (data) {
    partyResponded = data.fields.has_responded;
  }

  return (
    <>
      <AlertContainer template={AlertTemplate} closeButton={AlertCloseButton} />
      {loading && <LoadingIndicator />}
      {!!chosenPartyId && !partyResponded && !loading && <GuestsForm />}
      {!!partyResponded && !loading && <Confirmation />}
    </>
  );
}

export default RSVP;
