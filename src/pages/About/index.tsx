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
              Since the internships that I did during my graduation, I always
              looked for learn more about the world of development. Having
              experience with infrastrucutre tools like Docker and Nginx, as
              well as developing in different programming languages.
            </p>
            <p>
              Nowadays I&apos;m focused on increasing my knowledge in the
              javascript stack. Using node in backend and react in frontend.
            </p>
          </AboutText>
        </AboutInfos>
      </Content>
    </Element>
  </Container>
);

export default About;
