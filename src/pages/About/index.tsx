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
              He&apos;s BSc Science and Technology and Computer Engineer,
              graduated from UFRN.
            </p>
            <p>
              Since his first professional experiences, in internships programs
              performed during his graduation, he has always looked for improve
              his knowledge of the development world. He has worked with
              infrastructure tools like Docker and Nginx and also developed with
              different programming languages.
            </p>
            <p>
              &quot;Nowadays I&apos;m focused on increase my knowledge in
              javascript stack using Node in backend and React in
              frontend.&quot;
            </p>
          </AboutText>
        </AboutInfos>
      </Content>
    </Element>
  </Container>
);

export default About;
