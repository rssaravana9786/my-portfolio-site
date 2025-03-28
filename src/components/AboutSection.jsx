import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  padding: 80px 10%;
  background: #111;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #00c3ff, #ff00ff);
    -webkit-background-clip: text;
    color: transparent;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    line-height: 1.6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 50px 5%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const InfoBox = styled.div`
  background: #222;
  padding: 15px 25px;
  border-radius: 10px;
  text-align: left;
  min-width: 250px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
  }

  h3 {
    color: #00c3ff;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Section id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate Software Engineer specializing in **Mobile App Development** with expertise in **Flutter framework and GetX state management technologies**. 
          I love building high-performance, scalable web applications that make a real impact.
        </p>

        <InfoContainer>
          <InfoBox>
            <h3>👨‍💻 Experience</h3>
            <p>9+ months in software development, working on web & mobile apps.</p>
          </InfoBox>
          <InfoBox>
            <h3>📚 Education</h3>
            <p>Bachelor's Degree in Computer Science & Engineering.</p>
          </InfoBox>
          <InfoBox>
            <h3>🔧 Skills</h3>
            <p>Java, Dart, JavaScript, Python, SQL, Firebase.</p>
          </InfoBox>
          <InfoBox>
            <h3>🎯 Interests</h3>
            <p>AI, Blockchain, Cybersecurity, Open-Source Contributions.</p>
          </InfoBox>
        </InfoContainer>
      </Section>
    </motion.div>
  );
};

export default AboutSection;
