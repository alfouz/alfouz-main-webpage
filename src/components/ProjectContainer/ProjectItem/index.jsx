import { Container, BottomContainer, LinkStyled, StyledImage } from "./styles";
import GitHubIcon from "../../../assets/githubIcon.svg";

function ProjectItem({ item }) {
  return (
    <a href={item.url}>
      <Container>
        <StyledImage src={item.image} height="128" />
        <BottomContainer>
          <span>
            <b>{item.title}</b>
          </span>
          {item.githubUrl && (
            <LinkStyled href={item.githubUrl}>
              <img src={GitHubIcon} width="24" height="24" />
            </LinkStyled>
          )}
        </BottomContainer>
      </Container>
    </a>
  );
}

export default ProjectItem;
