import React, { useEffect } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { B1 } from "../../components/Fonts";
import Button, { STYLES } from "../../components/Button";
import { ButtonGroup } from "../../components/ButtonGroup";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";

const Title = styled(B1)`
  margin-bottom: 1rem;
`;

function ChooseParty() {
  const name = useStore((state) => state.name);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const { data, isLoading } = useGetPotentialParties(name);
  //   const navigate = useNavigate();

  useEffect(() => {
    if (potentialParties && potentialParties.length === 1) {
      setChosenPartyId(0);
    }
  }, [potentialParties]);

  // const [chosenParty, setChosenParty] = useState(null);

  //   const getPartyDisplayValue = (party) => {
  //     const guestNames = party.guests.reduce(
  //       (result, guest) =>
  //         result === "" ? guest.name : `${result}, ${guest.name}`,
  //       ""
  //     );

  //   return party.location ? `${guestNames} (${party.location})` : guestNames;
  // };

  //   const options = potentialParties.map((party) => ({
  //     value: party.id,
  //     label: getPartyDisplayValue(party),
  //   }));

  // const onChosenPartyChange = (e) => {
  //   setChosenParty(e.target.value);
  // };

  // const onNext = () => {
  //   // const chosenPartyValue = potentialParties.find(
  //   //   (party) => party.id === chosenParty
  //   // );
  //   // onChooseParty(chosenPartyValue);
  // };

  return (
    <div>
      <Title>
        We have found more than one match in the guest list. Please select the
        correct option from the list below.
      </Title>

      {data.map((option) => (
        <pre>1</pre>
      ))}

      {/* <RadioGroup
        label="Options"
        options={options}
        input={{ value: chosenParty, onChange: onChosenPartyChange }}
      /> */}

      <ButtonGroup right>
        <Button
          buttonStyle={STYLES.PRIMARY}
          onClick={() => {
            console.log("next");
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ChooseParty;
