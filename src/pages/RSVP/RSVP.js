import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import NameForm from "./form/NameForm";
import GuestsForm from "./form/GuestsForm";
import MultiMatchForm from "./form/MultiMatchForm";
import Confirmation from "./confirmation/Confirmation";
import { HOME } from "../../routes/routes";
import { useHistory } from "react-router-dom";

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
      fetch(`http://127.0.0.1:8000/guests/${chosenParty.pk}/`)
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
              `http://127.0.0.1:8000/parties/?first_name=${firstName}&last_name=${lastName}`
            )
              .then((response) => response.json())
              .then((data) => setPotentialParties(data))
              .then(() => setLoading(false));
          }}
          onCancel={() => {
            let history = useHistory();
            history.push(HOME.path);
          }}
        />
      )}
      {!!chosenParty && !showConfirmation && !!guests && !loading && (
        <GuestsForm
          guests={guests}
          updateGuests={(updatedGuests) => {
            setLoading(true);
            console.log(JSON.stringify(updatedGuests));
            fetch(`http://127.0.0.1:8000/guests/${chosenParty.pk}/`, {
              method: "POST",
              body: JSON.stringify(updatedGuests),
            }).then(() => setLoading(false));
          }}
          onCancel={() => {
            let history = useHistory();
            history.push(HOME.path);
          }}
        />
      )}
      {false && showConfirmation && !loading && (
        <Confirmation
          guests={guests}
          goToHome={() => {
            let history = useHistory();
            history.push(HOME.path);
          }}
        />
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
