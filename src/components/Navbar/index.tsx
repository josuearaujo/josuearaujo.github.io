import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import Scroll from 'react-scroll';

import { Container } from './styles';

const MyNavbar: React.FC = () => {
  const handleClickScroll = useCallback(name => {
    Scroll.scroller.scrollTo(name, {
      smooth: true,
      offset: -70,
      duration: 500,
    });
  }, []);

  return (
    <Container>
      <Navbar className="navBarBg" bg="" expand="sm" fixed="top">
        <Navbar.Brand
          className="main-name"
          onClick={() => handleClickScroll('intro')}
        >
          Josué Araújo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              style={{ marginRight: '50px' }}
              href="#home"
              onSelect={() => handleClickScroll('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: '50px' }}
              href="#skills"
              onSelect={() => handleClickScroll('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: '50px' }}
              href="#contact"
              onSelect={() => handleClickScroll('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNavbar;
