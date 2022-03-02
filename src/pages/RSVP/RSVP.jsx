/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import GuestsForm from "./form/GuestsForm";
import Confirmation from "./confirmation/Confirmation";
import { HOME } from "../../routes/routes";

function RSVP() {
  const chosenParty = useSelector((state) => state.party.details);
  // const partyLoaded = useSelector((state) => state.party.hasLoaded);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partyNotFoundAlert, setPartyNotFoundAlert] = useState(null);
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    if (chosenParty && chosenParty.pk) {
      fetch(`${process.env.REACT_APP_API_URL}/guests/${chosenParty.pk}/`)
        .then((response) => response.json())
        .then((data) => {
          setGuests(data);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }, [chosenParty]);

  useEffect(() => {
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

  const history = useHistory();

  return (
    <PageWithNav>
      <AlertContainer template={AlertTemplate} closeButton={AlertCloseButton} />
      {loading && <LoadingIndicator />}
      {!!chosenParty && !showConfirmation && !!guests && !loading && (
        <GuestsForm
          guests={guests}
          updateGuests={(updatedGuests) => {
            console.log(updatedGuests);

            setLoading(true);
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
