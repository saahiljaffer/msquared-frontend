import React from "react";
import styled from "styled-components";
import { S2 } from "../../components/Fonts";
import NavBar from "../../components/NavBar";

const StartSection = styled.div`
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
    url(/gold7.png) repeat;
  background: -o-linear-gradient(transparent, transparent);
  -webkit-background-clip: text;
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

const Gold = styled.div`
  margin-right: -1rem;
  background-image: url("/images/GF_11.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 65px 296px;
`;

export default function WeddingDay() {
  return (
    <>
      <NavBar />

      <Gold>
        <StartSection>
          <P>
            Sukaina & Eliya Nasser humbly request your presence at the Mendhi of
          </P>
        </StartSection>

        <MainTitle>Malika Maryam</MainTitle>

        <StartSection>
          <P>Thursday June 2nd, 2022 at 4:00 PM</P>
        </StartSection>

        <StartSection>
          <P>Royal Gardens Party Room</P>
          <P>376 Hwy 7</P>
          <P>Richmond Hill, Ontario L4B 0C4</P>
        </StartSection>

        <StartSection>
          <P>4:30 PM: Recitation begins </P>
          <P>5:30 PM: Dinner is served </P>
          <P>6:00 PM: Mendhi application begins </P>
        </StartSection>
      </Gold>

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
