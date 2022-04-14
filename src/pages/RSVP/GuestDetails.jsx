import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { S1, S2 } from "../../components/Fonts";

const GuestContainer = styled.section`
  margin-bottom: 2rem;
`;

const GuestHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
  text-align: start;
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              viewBox="0 0 448 512"
            >
              <path d="M224 232C237.3 232 248 242.7 248 256V304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H248V400C248 413.3 237.3 424 224 424C210.7 424 200 413.3 200 400V352H152C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H200V256C200 242.7 210.7 232 224 232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z" />
            </svg>
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
        <Answer>Is attending nikaah?</Answer>
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
