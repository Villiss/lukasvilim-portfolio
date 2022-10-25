import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Cross platform mobile app developer, currently working with React Native.
        {/* Passionate self teaching frontend developer while studying on Comenius University. My biggest passion is to build websites that are reactive, so I could be proud to show them to anyone. */}
      </SectionText>
      <Button>
        <Link href='#about'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        Learn more
        </a>
        </Link>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;