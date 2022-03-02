import React, { useEffect, useState } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import GuestsForm from "../RSVP/form/GuestsForm";
import Confirmation from "../RSVP/confirmation/Confirmation";
import { HOME } from "../../routes/routes";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function RSVP(props) {
  const [chosenParty, setChosenParty] = useState(null);
  const [potentialParties, setPotentialParties] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partyNotFoundAlert, setPartyNotFoundAlert] = useState(null);
  const [guests, setGuests] = useState(null);
  const count = useSelector((state) => state.party.partyID);

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
      {!!chosenParty && !showConfirmation && !!guests && !loading && (
        <GuestsForm
          guests={guests}
          updateGuests={(updatedGuests) => {
            setLoading(true);
            console.log(JSON.stringify(updatedGuests));
            fetch(
              `${process.env.REACT_APP_API_URL}/guests/${chosenParty.pk}/`,
              {
                method: "POST",
                body: JSON.stringify(updatedGuests),
              }
            ).then(() => setLoading(false));
          }}
          onCancel={() => {
            history.push(HOME.path);
          }}
        />
      )}
      {showConfirmation && !loading && <Confirmation guests={guests} />}
    </PageWithNav>
  );
}

export default RSVP;
