import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { H6, S1 } from "../../components/Fonts";

const GuestContainer = styled.section`
  margin-bottom: 1rem;
`;

const GuestName = styled(H6)`
  margin-bottom: 1rem;
`;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const AnswerText = styled(S1)``;

function GuestDetails({ guest }) {
  return (
    <GuestContainer>
      <GuestName>
        {`${guest.fields.first_name} ${guest.fields.last_name}`}
      </GuestName>
      <AnswerContainer>
        <S1>Is attending mendhi?</S1>
        <AnswerText>
          {guest.fields.is_attending_mendhi ? "Yes" : "No"}
        </AnswerText>
      </AnswerContainer>
      <AnswerContainer>
        <S1>Is attending nikkah?</S1>
        <AnswerText>{guest.fields.is_attending ? "Yes" : "No"}</AnswerText>
      </AnswerContainer>
      <AnswerContainer>
        <S1>Is attending reception?</S1>
        <AnswerText>
          {guest.fields.is_attending_reception ? "Yes" : "No"}
        </AnswerText>
      </AnswerContainer>
    </GuestContainer>
  );
}

GuestDetails.propTypes = {
  guest: PropTypes.shape({
    fields: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      is_attending: PropTypes.bool.isRequired,
      is_attending_reception: PropTypes.bool.isRequired,
      is_attending_mendhi: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};

export default GuestDetails;
