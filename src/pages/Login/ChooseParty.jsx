import React from "react";
import styled from "styled-components";
import { S2 } from "../../components/Fonts";
import useStore from "../../store";
import { useGetPotentialParties } from "../../api";
import NavBar from "../../components/NavBar";

const Title = styled(S2)`
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
  border-radius: 0.25rem;
  font-weight: ${(props) => props.theme.fonts.button.weight};
`;

const Table = styled.table`
  margin: auto;
`;

const Cell = styled.td`
  padding: 0 15px;
`;

function ChooseParty() {
  const name = useStore((state) => state.name);
  const setChosenPartyId = useStore((state) => state.setChosenPartyId);
  const { data } = useGetPotentialParties(name);
  return (
    <>
      <NavBar />
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
          <Table>
            {party.map((guest) => (
              <tr>
                <Cell>
                  {guest.first_name} {guest.last_name}
                </Cell>
                <Cell>{guest.email}</Cell>
              </tr>
            ))}
          </Table>
        </Choice>
      ))}
    </>
  );
}

export default ChooseParty;
