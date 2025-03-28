import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  padding: 50px 10%;
  background: #111;
  color: white;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled(motion.div)`
  background: #222;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
  }

  h3 {
    color: #00c3ff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const projects = [
  { title: "E-Commerce App", description: "A modern online shopping platform." },
  { title: "Autonomous Code Reviewer", description: "An app reviews code powered by machine learning and natural language processing for improving code's quality." },
  { title: "Portfolio Website", description: "A fully animated personal website." },
];

const ProjectsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Section id="projects">
        <h2>My Projects</h2>
        <Grid>
          {projects.map((project, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </motion.div>
  );
};

export default ProjectsSection;
