import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element } from 'react-scroll';
import IconWithName from '../../components/IconWithName';

import dockerLogo from '../../assets/skills/docker-logo.png';
import gitLogo from '../../assets/skills/git-logo.png';
import laravelLogo from '../../assets/skills/laravel-logo.png';
import nodeLogo from '../../assets/skills/node-logo.png';
import phpLogo from '../../assets/skills/php-logo.png';
import reactLogo from '../../assets/skills/react-logo.png';
import typescriptLogo from '../../assets/skills/typescript-logo.png';

import { Container, Content, SkillsContent } from './styles';

const Skills: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container>
      <Element name="skills">
        <Content>
          <h1>Skills</h1>

          <SkillsContent>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              centerMode
            >
              <IconWithName src={dockerLogo} alt="Docker">
                Docker
              </IconWithName>
              <IconWithName src={gitLogo} alt="Git">
                Git
              </IconWithName>
              <IconWithName src={laravelLogo} alt="Laravel">
                Laravel
              </IconWithName>
              <IconWithName src={nodeLogo} alt="Node">
                Node
              </IconWithName>
              <IconWithName src={phpLogo} alt="PHP">
                PHP
              </IconWithName>
              <IconWithName src={reactLogo} alt="React">
                React
              </IconWithName>
              <IconWithName src={typescriptLogo} alt="Typescript">
                Typescript
              </IconWithName>
            </Carousel>
          </SkillsContent>
        </Content>
      </Element>
    </Container>
  );
};

export default Skills;
