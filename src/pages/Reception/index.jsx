import React from "react";
import styled from "styled-components";
import { S2 } from "../../components/Fonts";
import NavBar from "../../components/NavBar";

const StartSection = styled.div`
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: start;
`;

const MainTitle = styled.h1`
  font-size: var(--font-size-fluid-2);
  font-weight: ${(props) => props.theme.fonts.h1.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
  text-align: center;
  margin-bottom: 1rem;

  color: #c3a343;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(transparent, transparent),
    url(/images/GF_7_1.png) repeat;
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
  background-size: contain;
`;

const P = styled(S2)``;

const DirectionsContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const DirectionsFrame = styled.iframe`
  margin-left: 1rem;
  border: none;
`;

const RightGold = styled.div`
  margin-right: -1rem;
  background-image: url("/images/GF_11_4.png");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 65px 296px;
`;

const LeftGold = styled.div`
  margin-left: -1rem;
  background-image: url("/images/GF_11_2.png");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 65px 296px;
  min-height: 300px;
`;

const Span = styled.span`
  font-size: 0px;
`;

export default function WeddingDay() {
  return (
    <>
      <NavBar />

      <RightGold>
        <StartSection>
          <P>
            In the name of the Almighty, the most Beneficent, the Most Merciful
          </P>
        </StartSection>

        <StartSection>
          <P>
            We request the pleasure of your company at the Brunch Reception of
          </P>
        </StartSection>

        <MainTitle>
          Maysum & Mali<Span> </Span>ka
        </MainTitle>

        <StartSection>
          <P>Sunday June 5th, 2022 at 10:00 AM</P>
        </StartSection>

        <StartSection>
          <P>Madison Greenhouse Event Venue</P>
          <P>160 Bayview Parkway</P>
          <P>Newmarket, Ontario L3Y 3W3</P>
        </StartSection>
      </RightGold>

      <LeftGold>
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
      </LeftGold>
    </>
  );
}
