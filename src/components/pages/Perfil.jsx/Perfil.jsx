import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthProvider";
import {
  MainContainer,
  ProfileHeader,
  ProfileContent,
  ProfileSection,
  LogoutButton,
} from "./Perfil.styled";

const Perfil = () => {
  const { user, setToken } = useAuthContext();
  const navigate = useNavigate();

  const onLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <MainContainer>
      <ProfileHeader>
        <div className="profile-info">
          <h1>Perfil do Usuário</h1>
          <p>Bem-vindo, {user?.name || "Usuário"}!</p>
        </div>
        <LogoutButton onClick={onLogout}>Sair</LogoutButton>
      </ProfileHeader>

      <ProfileContent>
        <ProfileSection>
          <h2>Informações do Perfil</h2>
          <div className="user-details">
            <p>
              <strong>ID:</strong> {user?.id || "Não informado"}
            </p>
            <p>
              <strong>Nome:</strong> {user?.name || "Não informado"}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "Não informado"}
            </p>
            <p>
              <strong>Status:</strong> Usuário ativo
            </p>
          </div>

          <div className="profile-actions">
            <button className="btn-primary">Editar Perfil</button>
            <button className="btn-secondary">Alterar Senha</button>
          </div>
        </ProfileSection>
      </ProfileContent>
    </MainContainer>
  );
};

export default Perfil;
