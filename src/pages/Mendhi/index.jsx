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
        <MainHeader>Thursday June 2th, 2022 at 4:30 PM</MainHeader>
      </HeadingContainer>

      <Section>
        <P>Royal Gardens Party Room</P>
        <P>370-376 Hwy 7</P>
        <P>Richmond Hill, Ontario L4B 0C6</P>
      </Section>

      <DirectionsContainer>
        <DirectionsFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.680614987092!2d-79.39797878407472!3d43.84171987911515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2b44f716eb59%3A0xe55ea4717c99aec4!2sRoyal%20Gardens%20Condominiums!5e0!3m2!1sen!2sus!4v1649449165711!5m2!1sen!2sus"
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
