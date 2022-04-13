import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { S1, S2 } from "../../components/Fonts";

const GuestContainer = styled.section`
  margin-bottom: 2rem;
`;

const GuestHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const GuestName = styled(S1)``;

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledAnchor = styled.a`
  color: #000;
`;

const Answer = styled(S2)``;

function GuestDetails({ guest }) {
  const filename = `/ics/${guest.fields.is_attending_mendhi ? "mendhi" : ""}${
    guest.fields.is_attending_nikkah ? "nikaah" : ""
  }${guest.fields.is_attending_reception ? "reception" : ""}.ics`;
  return (
    <GuestContainer>
      <GuestHeader>
        <GuestName>
          {`${guest.fields.first_name} ${guest.fields.last_name}`}
        </GuestName>
        {(guest.fields.is_attending_mendhi ||
          guest.fields.is_attending_nikkah ||
          guest.fields.is_attending_reception) && (
          <StyledAnchor href={filename}>
            <FontAwesomeIcon icon="fa-solid fa-calendar-plus" size="lg" />
          </StyledAnchor>
        )}
      </GuestHeader>

      {guest?.fields?.is_invited_mendhi && (
        <AnswerContainer>
          <Answer>Is attending mendhi?</Answer>
          <Answer>{guest.fields.is_attending_mendhi ? "Yes" : "No"}</Answer>
        </AnswerContainer>
      )}
      <AnswerContainer>
        <Answer>Is attending nikkah?</Answer>
        <Answer>{guest.fields.is_attending_nikkah ? "Yes" : "No"}</Answer>
      </AnswerContainer>
      {guest?.fields?.is_invited_reception && (
        <AnswerContainer>
          <Answer>Is attending reception?</Answer>
          <Answer>{guest.fields.is_attending_reception ? "Yes" : "No"}</Answer>
        </AnswerContainer>
      )}
    </GuestContainer>
  );
}

GuestDetails.propTypes = {
  guest: PropTypes.shape({
    fields: PropTypes.shape(),
  }).isRequired,
};

export default GuestDetails;
