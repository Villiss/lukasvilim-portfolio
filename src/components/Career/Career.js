import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './CareerStyles';

const data = [
  { since: 'May 2017', text: 'TWU s.r.o. - Web developer'},
  { since: 'September 2021', text: 'Turn s.r.o. - Part-time Mobile App developer', until: 2022},
  { since: 'September 2022', text: 'Turn s.r.o. - Freelance Mobile App developer'},
];

const Career = () => (
  <Section>
    <SectionTitle>Career</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.since} - {card.until ? card.until : 'Present'}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Career;
