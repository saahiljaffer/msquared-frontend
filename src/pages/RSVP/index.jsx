import React from "react";
import LoadingIndicator from "../../components/LoadingIndicator";
import GuestsForm from "./GuestsForm";
import Confirmation from "./Confirmation";
import useStore from "../../store";
import { useGetParty } from "../../api";
import NavBar from "../../components/NavBar";

function RSVP() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const { data, loading } = useGetParty(chosenPartyId);

  let partyResponded;
  if (data) {
    partyResponded = data.has_responded;
  }

  return (
    <>
      <NavBar />
      {loading && <LoadingIndicator />}
      {!!chosenPartyId && !partyResponded && !loading && <GuestsForm />}
      {!!partyResponded && !loading && <Confirmation />}
    </>
  );
}

export default RSVP;
