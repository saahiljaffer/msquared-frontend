import React from "react";
import styled from "styled-components";
import { H5, S1 } from "../../components/Fonts";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const P = styled(S1)`
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const DirectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DirectionsFrame = styled.iframe`
  border: none;
`;

export default function WeddingDay() {
  return (
    <>
      <HeadingContainer>
        <MainHeader>Sunday June 5th, 2022 at 10:00 AM</MainHeader>
      </HeadingContainer>

      <Section>
        <P>Madison Greenhouse</P>
        <P>160 Bayview Parkway</P>
        <P>Newmarket, Ontario L3Y 3W3</P>
      </Section>

      <DirectionsContainer>
        <DirectionsFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.830882764716!2d-79.46007038406894!3d44.06620067910927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882acdede351a50d%3A0x2edb663f2da9493f!2sMadison%20Greenhouse%20Event%20Venue!5e0!3m2!1sen!2sus!4v1649448935530!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </DirectionsContainer>
    </>
  );
}
