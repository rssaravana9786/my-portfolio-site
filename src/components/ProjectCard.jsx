import styled from "styled-components";

const Card = styled.div`
  background: #222;
  color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin: 15px 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #bbb;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
    </Card>
  );
};

export default ProjectCard;
