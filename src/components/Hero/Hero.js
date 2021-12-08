import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle maincenter>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Front End and Mobile App Developer
      </SectionText>
      <Button onClick={props.handleClick}>Get Resume</Button>
      <Button onClick={props.handleClick}>Get CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;