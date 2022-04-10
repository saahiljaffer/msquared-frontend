import React from "react";
import styled from "styled-components";
import { S1, S2 } from "../../components/Fonts";
import NavBar from "../../components/NavBar";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(S1)`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const P = styled(S2)``;

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
      <NavBar />
      <HeadingContainer>
        <MainHeader>Saturday June 4th, 2022 at 3:00 PM</MainHeader>
      </HeadingContainer>

      <Section>
        <P>Jaffari Community Centre</P>
        <P>9000 Bathurst Street</P>
        <P>Thornhill, Ontario L4J 8A7</P>
      </Section>

      <DirectionsContainer>
        <DirectionsFrame
          title="Directions"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.6760423718156!2d-79.46253268407473!3d43.84181467911536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2bf0ae02f717%3A0x926b8f95eda97f37!2sJaffari%20Community%20Centre!5e0!3m2!1sen!2sus!4v1649448705246!5m2!1sen!2sus"
          width="600"
          height="450"
          frameBorder="0"
          scrolling="no"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </DirectionsContainer>
    </>
  );
}
