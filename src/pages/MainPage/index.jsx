import {
  Container,
  InnerContainer,
  HeaderStyled,
  ListElement,
  ListStyled,
  DataStyled,
} from "./styles";
import MediaLinks from "../../components/MediaLinks";
import ProjectContainer from "../../components/ProjectContainer";

function MainPage() {
  return (
    <Container>
      <InnerContainer>
        <HeaderStyled>Adrián López Fouz</HeaderStyled>
        <DataStyled>Lugo, Galicia</DataStyled>
        <ListStyled>
          <ListElement>Ingeniero de Software</ListElement>
          <ListElement>Desarrollador Web</ListElement>
          <ListElement>Profesor de informática</ListElement>
        </ListStyled>
        <MediaLinks />
        <ProjectContainer />
      </InnerContainer>
    </Container>
  );
}

export default MainPage;
