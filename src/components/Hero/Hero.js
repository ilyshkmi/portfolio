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
      Hello, Ilyas Hakimi here. Currently working as System Engineer at YHCM Sdn. Bhd. My previous job is IT Officer at Nissha Precision Technologies Malaysia Sdn. Bhd. Expertise in managing and maintaining IT infrastructure, providing technical support, and implementing security measures. Adept at troubleshooting, network management, and IT projects. Committed to ensuring optimal system performance and data security.
      Graduate from Universiti Malaysia Pahang Al-Sultan Abdullah. Completed my Industrial Training at Sony EMCS (Malaysia) Sdn Bhd as Web Developer. 
      </SectionText>
      <Button href="https://drive.google.com/file/d/1Q-wazPvzoIXn_qGmQUknb10uTJCTyIf2/view?usp=sharing">Get Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;