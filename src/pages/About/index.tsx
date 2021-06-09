import React from 'react';
import { Element } from 'react-scroll';
import { Container, Content, AboutInfos, AboutText } from './styles';
import profilePhoto from '../../assets/profile-photo.jpg';

const About: React.FC = () => (
  <Container>
    <Element name="about">
      <Content>
        <h1>About</h1>

        <AboutInfos>
          <img src={profilePhoto} alt="Josué Araújo" width={300} height={300} />

          <AboutText>
            <p>
              I&apos;m BSc Science and Technology and Computer Engineer,
              graduated from UFRN.
            </p>
            <p>
              Since the internships that I&apos;ve made during my graduate,
              I&apos;ve always looked for improve my knowledge about the
              development world. I&apos;ve worked using infrastructure tools
              like Docker and Nginx, as well as developing in differents
              programming languages.
            </p>
            <p>
              Nowadays I&apos;m focused on increase my knowledge in the
              javascript stack. Using Node in backend and React in frontend.
            </p>
          </AboutText>
        </AboutInfos>
      </Content>
    </Element>
  </Container>
);

export default About;
