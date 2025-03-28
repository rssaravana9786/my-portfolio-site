import { motion } from "framer-motion";
import styled from "styled-components";

const ResumeContainer = styled(motion.div)`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #444;
  color: white;
`;

const Button = styled.a`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  color: white;
  background: #007bff;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: #0056b3;
  }
`;

const ResumeDownload = () => {
  return (
    <ResumeContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2>📄 Download My Resume</h2>
      <Button href="/resume.pdf" download="My_Resume.pdf">
        📥 Download Resume
      </Button>
    </ResumeContainer>
  );
};

export default ResumeDownload;
