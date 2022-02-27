import React, { useEffect, useState } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import NameForm from "../RSVP/form/NameForm";
import GuestsForm from "../RSVP/form/GuestsForm";
import MultiMatchForm from "../RSVP/form/MultiMatchForm";
import Confirmation from "../RSVP/confirmation/Confirmation";
import { HOME } from "../../routes/routes";
import { useHistory } from "react-router-dom";
import Landing from "./Landing";
import { store } from "../../reducers/index";

function RSVP(props) {
  const [chosenParty, setChosenParty] = useState(null);
  const [potentialParties, setPotentialParties] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partyNotFoundAlert, setPartyNotFoundAlert] = useState(null);
  const [loadingPartiesErrorId, setLoadingPartiesErrorId] = useState(null);
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    if (chosenParty && chosenParty.pk) {
      fetch(`${process.env.REACT_APP_API_URL}/guests/${chosenParty.pk}/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setGuests(data);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [chosenParty]);

  useEffect(() => {
    if (chosenParty) {
      console.log(chosenParty);
      // The actions can be serialized, logged or stored and later replayed.
      store.dispatch({ type: "counter/incremented" });
    }
    if (chosenParty && chosenParty.fields.hasResponded) {
      if (partyNotFoundAlert) {
        alerts.close(partyNotFoundAlert);
      }
      setPartyNotFoundAlert(null);
      setShowConfirmation(true);
      alerts.showSuccess(
        "You have already responded. Please find your details below."
      );
    }
  }, [chosenParty]);

  useEffect(() => {
    if (potentialParties && potentialParties.length === 1) {
      setChosenParty(potentialParties[0]);
      setPotentialParties(null);
    } else if (potentialParties) {
      setPartyNotFoundAlert(
        alerts.showError(
          "We could not find your invite. Please check your spelling and try again.",
          { onClose: () => setPartyNotFoundAlert(null) }
        )
      );
    }
  }, [potentialParties]);

  let history = useHistory();

  return (
    <PageWithNav>
      <AlertContainer template={AlertTemplate} closeButton={AlertCloseButton} />
      {loading && <LoadingIndicator />}
      {!chosenParty && !potentialParties && !loading && (
        <NameForm
          onSubmit={(values) => {
            const { firstName, lastName } = values;
            if (loadingPartiesErrorId) {
              alerts.close(loadingPartiesErrorId);
            }

            setLoadingPartiesErrorId(null);
            setLoading(true);

            fetch(
              `${process.env.REACT_APP_API_URL}/parties/?first_name=${firstName}&last_name=${lastName}`
            )
              .then((response) => response.json())
              .then((data) => setPotentialParties(data))
              .then(() => setLoading(false));
          }}
        />
      )}
      {!!chosenParty && !showConfirmation && !!guests && !loading && (
        <Landing />
      )}
      {!chosenParty && potentialParties && potentialParties.length > 1 && (
        <MultiMatchForm
          potentialParties={potentialParties}
          onChooseParty={(party) => {
            setChosenParty(party);
            setPotentialParties(null);
          }}
        />
      )}
    </PageWithNav>
  );
}

export default RSVP;
