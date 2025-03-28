import styled from "styled-components";
import { motion } from "framer-motion";
import { FaAward, FaCertificate } from "react-icons/fa";

const Section = styled.section`
  padding: 80px 20px;
  background: #111;
  color: white;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #00c3ff, #ff00ff);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 30px;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const CertificateCard = styled(motion.div)`
  background: #222;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 2.5rem;
    color: #00c3ff;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const AchievementsSection = () => {
  const certifications = [
    { title: "Flutter", issuer: "Iconix Software Solutions" },
    { title: "Basic Python", issuer: "Innate Talent Acquisition" },
    { title: "Advanced Python", issuer: "Innate Talent Acquisition" },
  ];

  return (
    <Section id="achievements">
      <Heading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Achievements & Certifications
      </Heading>

      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificateCard 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FaCertificate />
            <div>
              <h3>{cert.title}</h3>
              <p>Issued by {cert.issuer}</p>
            </div>
          </CertificateCard>
        ))}
      </CertificationsGrid>
    </Section>
  );
};

export default AchievementsSection;
