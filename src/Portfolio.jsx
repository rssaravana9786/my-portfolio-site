import React from "react";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AcheivementsSection";
import ContactSection from "./components/ContactSection";

const Container = styled.div`
  min-height: 100vh;
`;

const Portfolio = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};

export default Portfolio;
