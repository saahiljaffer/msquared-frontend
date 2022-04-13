import React from "react";
import styled from "styled-components";
import { S1, S2 } from "../../components/Fonts";
import NavBar from "../../components/NavBar";

const ImportantText = styled(S1)`
  font-size: ${(props) => props.theme.fonts.s2.size};
`;

const Section = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const StartSection = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  text-align: start;
`;

const MainTitle = styled.h1`
  font-size: var(--font-size-fluid-2);
  font-weight: ${(props) => props.theme.fonts.h1.weight};
  color: ${(props) => props.theme.colors.foreground.default};
  font-family: "Eu Alonira";
  text-align: center;
  margin-left: 1rem;

  color: #c3a343;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(transparent, transparent),
    url(/images/GF_7_1.png) repeat;
  background: -o-linear-gradient(transparent, transparent);
  background-size: contain;
  -webkit-background-clip: text;
`;

const Span = styled.span`
  font-size: 0px;
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

const LeftGold = styled.div`
  margin-left: -1rem;
  background-image: url("/images/GF_11_3.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 65px 296px;
`;

const RightGold = styled.div`
  margin-right: -1rem;
  background-image: url("/images/GF_11_1.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 65px 296px;
`;

export default function WeddingDay() {
  return (
    <>
      <NavBar />

      <LeftGold>
        <StartSection>
          <P>
            In the name of the Almighty, the Most Beneficent, the Most Merciful
          </P>
        </StartSection>

        <StartSection>
          <P>
            We request the honour of your presence to witness the Nikaah
            Ceremony of
          </P>
        </StartSection>
        <RightGold>
          <MainTitle>Maysum</MainTitle>

          <Section>
            <P>Son of Haider and Tahera Jaffer</P>
          </Section>

          <MainTitle style={{ marginBottom: "1rem" }}>&</MainTitle>
          <MainTitle>
            Mali<Span> </Span>ka Mary<Span>s</Span>am
          </MainTitle>

          <Section>
            <P>Daughter of Murtaza and Sukaina Nasser</P>
          </Section>

          <StartSection>
            <P>Insha&apos;Allah on</P>
            <ImportantText>Saturday June 4th 2022 at 3:00 PM</ImportantText>
            <P>4th Zilqaad 1443 AH</P>
          </StartSection>

          <StartSection>
            <P>Jaffari Community Centre</P>
            <P>9000 Bathurst Street</P>
            <P>Thornhill, Ontario L4J 8A7</P>
          </StartSection>

          <StartSection>
            <P>Walimah dinner to follow</P>
          </StartSection>
        </RightGold>
      </LeftGold>

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
