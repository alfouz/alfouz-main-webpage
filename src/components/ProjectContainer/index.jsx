import { Container, InnerContainer } from "./styles";
import projects from "../../config/projects";
import ProjectItem from "./ProjectItem";

function ProjectContainer() {
  return (
    <Container>
      <h2>Proyectos</h2>
      <InnerContainer>
        {projects.map((item) => (
          <ProjectItem item={item} key={item.title} />
        ))}
      </InnerContainer>
    </Container>
  );
}

export default ProjectContainer;
