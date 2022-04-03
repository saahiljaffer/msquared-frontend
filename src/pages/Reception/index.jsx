import React, { Fragment } from "react";
import styled from "styled-components";
import { H5, H6, B2 } from "../../components/Fonts";

const HeadingContainer = styled.section`
  margin-bottom: 1rem;
`;

const MainHeader = styled(H5)`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const VenueInfo = styled(H6)`
  text-align: center;
`;

const VenueDetail = styled(B2)`
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionTitle = styled(H6)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const P = styled(B2)`
  margin-bottom: 1rem;
`;

export default function AfterParty() {
  return (
    <>
      <HeadingContainer>
        <MainHeader>5th June 2022</MainHeader>
        <VenueInfo>Madison Greenhouse</VenueInfo>
        <VenueDetail>160 Bayview Pkwy, Newmarket, Ontario, L3Y 3W3</VenueDetail>
        <B2>
          If your feet and head are not too delicate, we would be delighted if
          you could join us for some more fun on Sunday, 5th June at Madison
          Greenhouse in Newmarket. We will be meeting from 10am.
        </B2>
      </HeadingContainer>

      <SectionTitle>Accommodation</SectionTitle>
      <P>
        For those that would like to stay overnight, Arnolds Hotel have offered
        a special rate of €85 B&B per double/twin room based on 2 adults sharing
        and €75 B&B per single occupancy room.
      </P>
      <P>
        Please quote “Mc Hugh/Kerr wedding” when booking to avail of the
        discount (Tel 074-9136208)
      </P>

      <SectionTitle>Transport</SectionTitle>
      <P>Dunfanaghy Taxi 085 7870164</P>
    </>
  );
}
