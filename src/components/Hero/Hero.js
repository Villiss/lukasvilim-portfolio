import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        lukasvilim <br/>
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        Passionate self teaching frontend developer while studying on Comenius University. My biggest passion is to build websites that are reactive, so I could be proud to show them to anyone.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;