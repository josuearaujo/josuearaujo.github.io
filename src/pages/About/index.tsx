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
              Hi, I am a Computer Engineer and an enthusiast in web development.
              I have work experience with PHP/Laravel and currently I'm
              transitioning to the Javascript stack, using Node.js/TypeScript
              and React. Furthermore, I am also skilled in web infrastructure
              tools such as Docker and Nginx, including CI/CD operations.
            </p>
            <p>
              Since my first professional experiences, including the internships
              I participated in during my years at the university, I have been
              working very hard to widen and strengthen my skill set.
            </p>
            <p>
              Therefore, I am conditioned and highly prone to learning new tools
              and challenge myself to deliver the best results.
            </p>
          </AboutText>
        </AboutInfos>
      </Content>
    </Element>
  </Container>
);

export default About;
