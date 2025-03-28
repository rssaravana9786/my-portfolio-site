import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeDownload from "./components/ResumeDownload";
import ContactSection from "./components/ContactSection";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background 0.3s ease;
  }
`;

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme = "dark")
    //setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <button onClick={toggleTheme}>Toggle Dark/Light Mode</button>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <ResumeDownload />
      <ContactSection id="contact" />
    </ThemeProvider>
  );
}

export default App;
