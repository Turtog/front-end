import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavItem,
  StyledLink,
  LogoutButton,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, token, setToken } = useAuthContext();

  const isActive = (path) => location.pathname === path;
  const isLoggedIn = !!token && !!user;

  const onLogout = () => {
    setToken(null);
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo src="/src/components/images/logo.png" alt="Logo do Site" />
        <NavLinks>
          <NavItem>
            <StyledLink
              to="/"
              className={isActive("/") || isActive("/index") ? "active" : ""}
            >
              Home
            </StyledLink>
          </NavItem>

          {!isLoggedIn ? (
            <>
              <NavItem>
                <StyledLink
                  to="/login"
                  className={isActive("/login") ? "active" : ""}
                >
                  Login
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/cadastro"
                  className={isActive("/cadastro") ? "active" : ""}
                >
                  Cadastro
                </StyledLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <StyledLink
                  to="/perfil"
                  className={isActive("/perfil") ? "active" : ""}
                >
                  Perfil
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/cliente"
                  className={isActive("/cliente") ? "active" : ""}
                >
                  Solicitar Serviço
                </StyledLink>
              </NavItem>
              <NavItem>
                <StyledLink
                  to="/suporte"
                  className={isActive("/suporte") ? "active" : ""}
                >
                  Suporte
                </StyledLink>
              </NavItem>
              <NavItem>
                <LogoutButton onClick={onLogout}>Sair</LogoutButton>
              </NavItem>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
