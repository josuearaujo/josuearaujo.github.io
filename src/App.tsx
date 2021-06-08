import React from 'react';
import GlobalStyle from './styles/global';

import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
// import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    {/* <Projects /> */}
    <Contact />

    <GlobalStyle />
  </>
);

export default App;
