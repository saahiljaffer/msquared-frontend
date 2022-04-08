import React from "react";
import styled from "styled-components";
import { B1 } from "../../components/Fonts";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";

const Title = styled(B1)`
  margin-bottom: 1rem;
`;

const Choice = styled.button`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  color: inherit;
  border: none;
  padding-block: 20px;
  width: 100%;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

function ChooseParty() {
  const name = useStore((state) => state.name);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const { data } = useGetPotentialParties(name);
  return (
    <div>
      <Title>
        We have found more than one match in the guest list. Please select the
        correct option from the list below.
      </Title>

      {data.map((party) => (
        <Choice
          type="button"
          onClick={() => {
            setChosenPartyId(party[0].party_id);
          }}
        >
          {party.map((guest) => (
            <p>
              {guest.first_name} {guest.last_name} {guest.email}
            </p>
          ))}
        </Choice>
      ))}
    </div>
  );
}

export default ChooseParty;
