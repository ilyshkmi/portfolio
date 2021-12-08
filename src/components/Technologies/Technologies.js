import React from 'react';
import { DiApple, DiFirebase, DiIllustrator, DiLaravel, DiLinux, DiReact, DiUnitySmall, DiWindows, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a few technologies in the web development 
      and mobile app development world such as React Native, Laravel, 
      Codeigniter and React.js. I have also worked with NoSQL databases
      such as MongoDB and I felt in love with it.  
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiLaravel size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with Laravel and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Laravel, Node.js <br />
            and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile App</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWindows size="3rem" />
          <DiApple size="3rem" />
          {/* <DiLinux size="2.5rem" /> */}
        </picture>
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Experience with <br />
            Linux (Ubuntu and Pop Os), <br />
            Windows and MacOS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
          <DiIllustrator size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Software/Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Unity, Adobe editing <br />
            software such as After <br />
            Effect and Premiere Pro.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
