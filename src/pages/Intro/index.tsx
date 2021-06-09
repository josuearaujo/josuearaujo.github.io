import React from 'react';
import { Element } from 'react-scroll';
import { Container, BackgroundImage, MainText, InfoText } from './styles';

const Intro: React.FC = () => (
  <Container>
    <BackgroundImage>
      <Element name="intro">
        <MainText>
          <p>Hello, I&apos;m Josué Araújo</p>
        </MainText>
      </Element>

      <InfoText>
        <p>Software Engineer from Natal, Brazil</p>
        <p>Currently living in Montreal, Canada</p>
      </InfoText>
    </BackgroundImage>
  </Container>
);

export default Intro;
