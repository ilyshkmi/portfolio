import React from 'react';
import { certification } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BoxTextDate } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section id="certification">
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {certification.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.provider}</BoxNum>
          <BoxText>{card.title}</BoxText>
          <BoxTextDate>{card.date}</BoxTextDate>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
