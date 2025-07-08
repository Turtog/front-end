import React from "react";
import { Link, useParams } from "react-router-dom";
import { MainContainer, StyledLink } from "./Perfil.styled";

const Perfil = () => {
  const { id } = useParams();

  return (
    <MainContainer>
      <h1>Perfil do Usuário</h1>
      <p>Exibindo informações do usuário com ID: {id}</p>
      <StyledLink as={Link} to="/">
        Voltar para Home
      </StyledLink>
    </MainContainer>
  );
};

export default Perfil;
