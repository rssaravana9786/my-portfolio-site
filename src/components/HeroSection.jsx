import { motion } from "framer-motion";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
  color: white;
  padding: 20px;
  text-align: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 50px;
  }
`;

/* Circular Profile Image Wrapper */
const ProfileWrapper = styled.div`
  position: relative;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #00c3ff, #ff00ff);
  padding: 5px; /* Creates border effect */
  box-shadow: 0px 5px 15px rgba(0, 195, 255, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(0, 195, 255, 0.7);
  }
`;

/* Profile Image - Circular & Well Fitted */
const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: fill;
  background: #121212;
`;

const Content = styled.div`
  max-width: 600px;
  padding: 50px;

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    background: linear-gradient(90deg, #00c3ff, #ff00ff);
    -webkit-background-clip: text;
    color: transparent;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.8;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Button = styled(motion.a)`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #00c3ff, #ff00ff);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(90deg, #ff00ff, #00c3ff);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: #00c3ff;
    font-size: 2rem;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      color: #ff00ff;
      transform: scale(1.2);
    }
  }
`;

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Section id="hero">
        {/* Circular Profile with Flowchart Border */}
        <ProfileWrapper>
          <ProfileImage
            src="/src/assets/profile.jpg" // Replace with your actual image path
            alt="Saravana Kumar - Software Developer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </ProfileWrapper>

        {/* Text Content */}
        <Content>
          <h1>I'm Saravana Kumar</h1>
          <p>Software Developer | Cross-Platform Specialist | Tech Enthusiast</p>

          {/* Call to Action */}
          <Button
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </Button>

          {/* Social Media Links */}
          <SocialLinks>
            <a href="https://github.com/rssaravana9786" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saravana-kumar-578619236" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://x.com/saravana_r41555?t=D1h3M04SPopWqH5LajWgOQ&s=09" target="_blank">
              <FaTwitter />
            </a>
          </SocialLinks>
        </Content>
      </Section>
    </motion.div>
  );
};

export default HeroSection;
