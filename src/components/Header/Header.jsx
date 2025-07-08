import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavItem,
  StyledLink,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <NavItem>
            <StyledLink
              to="/perfil/1"
              className={
                location.pathname.startsWith("/perfil") ? "active" : ""
              }
            >
              Perfil
            </StyledLink>
          </NavItem>
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
              to="/suporte"
              className={isActive("/suporte") ? "active" : ""}
            >
              Suporte
            </StyledLink>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
