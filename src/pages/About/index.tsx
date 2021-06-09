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
              I am BSc Science and Technology and Computer Engineer, graduated
              from UFRN.
            </p>
            <p>
              Since my first professional experiences, in internships programs
              performed during my graduation, I have always looked for to
              improve my knowledge of the development world. I have worked with
              infrastructure tools like Docker and Nginx and also developed with
              different programming languages.
            </p>
            <p>
              Nowadays I am focused on increase my knowledge in javascript stack
              using Node in backend and React in frontend.
            </p>
          </AboutText>
        </AboutInfos>
      </Content>
    </Element>
  </Container>
);

export default About;
