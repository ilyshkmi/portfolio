import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero handleClick={() => window.open('https://saiful-personal-bucket.s3.us-east-2.amazonaws.com/Resume.pdf')} />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline handleClick={() => window.open('https://saiful-personal-bucket.s3.us-east-2.amazonaws.com/Curriculum+Vitae.pdf') } />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
