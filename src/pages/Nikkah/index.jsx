import React from "react";
import styled from "styled-components";
import { H5, B2, H6 } from "../../components/Fonts";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const VenueInfo = styled(H6)`
  text-align: center;
  /* color: ${(props) => props.theme.colors.background.quintenary}; */
`;

const VenueDetail = styled(B2)`
  margin-bottom: 1rem;
  text-align: center;
  /* color: ${(props) => props.theme.colors.background.quintenary}; */
`;

const SectionTitle = styled(H6)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  /* color: ${(props) => props.theme.colors.background.quintenary}; */
`;

const P = styled(B2)`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.foreground.secondary};
`;

const HotelName = styled(B2)`
  text-decoration: underline;
`;

export default function WeddingDay() {
  return (
    <>
      <HeadingContainer>
        <MainHeader>4th June 2022</MainHeader>
        <VenueInfo>Jaffari Community Centre</VenueInfo>
        <VenueDetail>
          9000 Bathurst Street, Vaughan Ontario, L4J 8A7
        </VenueDetail>
        <B2>
          Our wedding ceremony will take place at 3pm at the Jaffari Community
          Centre in Vaughan..
        </B2>
      </HeadingContainer>

      <SectionTitle>Accommodation</SectionTitle>
      <P>
        There are a limited number of bedrooms available at Rockhill House and
        we would be delighted to have as many of our friends and family stay
        with us. If you are interested in reserving a room please contact
        Catriona (086-3777948) or Darren (085-1319941).
      </P>

      <P>
        Alternatively, we have secured special rates in the following hotels,
        both of which are 5-8mins drive from Rockhill House.
      </P>

      <P>
        If making a reservation at either hotel please quote “Mc Hugh/Kerr
        wedding” to avail of their special rate.
      </P>

      <P>
        <HotelName>Radisson Hotel, Letterkenny (074-9194444)</HotelName>
        €84 B&B per double/twin room based on 2 adults sharing or €70 B&B per
        single occupancy room.
      </P>

      <P>
        <HotelName>Station House Hotel, Letterkenny (074-9123100)</HotelName>
        €60 B&B per person sharing or €80 B&B for single occupancy room.
      </P>

      <SectionTitle>Transport</SectionTitle>
      <P>
        A bus will be available to take guests from Rockhill House to The
        Radisson or Station House Hotel at 2:15am.
      </P>

      <P>
        The bus will continue on to Creeslough and Dunfanaghy (charge of €10 per
        person). If you would like to avail of the bus to Creeslough or
        Dunfanghy please advise Catriona or Darren as numbers are limited.
      </P>

      <P>
        For any guests that would like to depart earlier in the evening local
        taxis will be available.
      </P>

      <P>Letterkenny Cabs 074 9127000</P>
      <P>High Road Taxi Cabs 086 2462355</P>
    </>
  );
}
