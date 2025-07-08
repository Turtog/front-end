import { Link } from "react-router-dom";
import { MainContainer, StyledLink } from "./NotFound.styled";

const NotFound = () => {
  return (
    <MainContainer>
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <StyledLink as={Link} to="/">
        Voltar para Home
      </StyledLink>
    </MainContainer>
  );
};

export default NotFound;
