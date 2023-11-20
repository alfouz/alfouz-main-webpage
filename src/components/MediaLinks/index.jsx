import { Container, LinkStyled } from "./styles";
import GitHubIcon from "../../assets/githubIcon.svg";
import LinkedinIcon from "../../assets/linkedinIcon.svg";
import MailIcon from "../../assets/mailIcon.svg";

const GithubLink = "https://github.com/alfouz";
const LinkedinLink = "https://www.linkedin.com/in/alfouz";
const MainLink = "mailto:adrian@alfouz.es";

function MediaLinks() {
  return (
    <Container>
      <LinkStyled href={GithubLink} target="_blank">
        <img src={GitHubIcon} width="24" height="24" />
      </LinkStyled>
      <LinkStyled href={LinkedinLink} target="_blank">
        <img src={LinkedinIcon} width="24" height="24" />
      </LinkStyled>
      <LinkStyled href={MainLink}>
        <img src={MailIcon} width="24" height="24" />
      </LinkStyled>
    </Container>
  );
}

export default MediaLinks;
