import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./themes/Themes.js";
import Navbar from "./components/Navbar/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails/index.jsx";
import styled from "styled-components";
import "./App.css";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(255, 165, 0, 0.15) 0%,
      rgba(255, 165, 0, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(255, 255, 0, 0) 50%,
      rgba(255, 255, 0, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  transition: background-color 0.5s ease;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;