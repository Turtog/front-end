import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Perfil.css";

const Perfil = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Perfil do Usuário</h1>
      <p>Exibindo informações do usuário com ID: {id}</p>
      <Link to="/" className="btn">
        Voltar para Home
      </Link>
    </main>
  );
};

export default Perfil;
