import React from "react";
import {
  DiAndroid,
  DiApple,
  DiAws,
  DiBootstrap,
  DiCodeigniter,
  DiCss3,
  DiDart,
  DiDocker,
  DiFirebase,
  DiGithub,
  DiHtml5,
  DiIllustrator,
  DiJavascript,
  DiLinux,
  DiMsqlServer,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiReact,
  DiUnitySmall,
  DiWindows,
  DiZend,
} from "react-icons/di";
import {FaCentos} from "react-icons/fa"
import { SiCisco } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import { 
  GiServerRack,
  GiArtificialIntelligence,
} from "react-icons/gi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a few technologies in the Networking System such as Cisco
      Networking Configuration and system development world such as React.js.
      I have also worked with SQL databases such as MySQL and I felt in love
      with it. Latest, I do work with Automation Anywhere to develop a automation bot.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiCisco size="3rem" />
          <GiServerRack size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Networking Configuration</ListTitle>
          <ListParagraph>
            Experience with Cisco Network Configuration.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with JavaScript (ES6), HTML, CSS, C# and
            C++.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Node.js <br />
            and Next,js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="3rem" />
          <DiMsqlServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiCodeigniter size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web App Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, and Next.js. <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWindows size="3rem" />
          <DiLinux size="2.5rem" />
          <FaCentos size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Experience with <br />
            Linux (Ubuntu & CentOS), <br />
            Windows.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with Github.<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS Framework</ListTitle>
          <ListParagraph>
            Experience with Bootstrap 4.<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiArtificialIntelligence size="3rem" />
          <VscServerProcess size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Automation Anywhere</ListTitle>
          <ListParagraph>
            Experience with Automation Anywhere.<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
