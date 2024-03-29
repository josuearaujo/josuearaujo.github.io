import React from 'react';
import { Element } from 'react-scroll';
import IconWithName from '../../components/IconWithName';
import { Container, Content, ContactInformation } from './styles';

import emailLogo from '../../assets/contact/email-logo.png';
import githubLogo from '../../assets/contact/github-logo.png';
import instagramLogo from '../../assets/contact/instagram-logo.png';
import linkedinLogo from '../../assets/contact/linkedin-logo.png';
import wppLogo from '../../assets/contact/wpp-logo.png';

const Contact: React.FC = () => (
  <Container>
    <Element name="contact">
      <Content>
        <h1>Let&apos;s get in touch!</h1>

        <ContactInformation>
          <a href="https://www.linkedin.com/in/araujo-josue">
            <IconWithName src={linkedinLogo} alt="Linkedin">
              Linkedin
            </IconWithName>
          </a>

          <a href="https://github.com/josuearaujo">
            <IconWithName src={githubLogo} alt="Github">
              Github
            </IconWithName>
          </a>

          <a href="https://www.instagram.com/josuearauj/">
            <IconWithName src={instagramLogo} alt="Instagram">
              Instagram
            </IconWithName>
          </a>

          <a href="mailto: engjosuearaujo@gmail.com">
            <IconWithName src={emailLogo} alt="E-mail">
              E-mail
            </IconWithName>
          </a>

          <a href="https://wa.me/14385307406">
            <IconWithName src={wppLogo} alt="WhatsApp">
              WhatsApp
            </IconWithName>
          </a>
        </ContactInformation>
      </Content>
    </Element>
  </Container>
);

export default Contact;
