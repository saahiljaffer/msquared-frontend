import React, { useEffect, useState } from "react";
import { AlertContainer, alerts } from "react-very-simple-alerts";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AlertTemplate from "../../components/Alert/DefaultAlertTemplate";
import AlertCloseButton from "../../components/Alert/DefaultAlertCloseBtn";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import PageWithNav from "../helpers/PageWithNav";
import NameForm from "../RSVP/form/NameForm";
import MultiMatchForm from "../RSVP/form/MultiMatchForm";
import Landing from "./Landing";
import { setChosenParty } from "../../store/party/partySlice";

function RSVP(props) {
  // const [chosenParty, setChosenParty] = useState(null);
  const [potentialParties, setPotentialParties] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partyNotFoundAlert, setPartyNotFoundAlert] = useState(null);
  const [loadingPartiesErrorId, setLoadingPartiesErrorId] = useState(null);
  const [guests, setGuests] = useState(null);
  const chosenParty = useSelector((state) => state.party.details);
  const partyLoaded = useSelector((state) => state.party.hasLoaded);

  useEffect(() => {
    // alert(partyLoaded);
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
  }, [partyLoaded]);

  useEffect(() => {
    if (partyLoaded && chosenParty) {
      console.log(chosenParty);
      // The actions can be serialized, logged or stored and later replayed.
    }
    if (partyLoaded && chosenParty && chosenParty.fields.hasResponded) {
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (potentialParties && potentialParties.length === 1) {
      // setChosenParty(potentialParties[0]);
      dispatch(setChosenParty(potentialParties[0]));
      setPotentialParties(null);
      history.push("/");
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
      {!partyLoaded && !potentialParties && !loading && (
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
      {!!partyLoaded && !showConfirmation && !!guests && !loading && (
        <Landing />
      )}
      {!partyLoaded && potentialParties && potentialParties.length > 1 && (
        <MultiMatchForm
          potentialParties={potentialParties}
          onChooseParty={(party) => {
            dispatch(setChosenParty(party));
            // setChosenParty(party);
            setPotentialParties(null);
          }}
        />
      )}
    </PageWithNav>
  );
}

export default RSVP;
