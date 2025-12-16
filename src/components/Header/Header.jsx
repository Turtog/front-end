import { useEffect, useRef } from "react";
import { animate, createScope, spring, createDraggable } from "animejs";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { SVGatorCSSOnlyForReactJS } from "../SVGator/SVGator";
import "../../styles/tailwind.css";

import {
  HeaderContainer,
  Nav,
  LogoSVG,
  LogoSVGContainer,
  NavLinks,
  NavItem,
  StyledLink,
} from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, token, logout } = useAuthContext();

  const root = useRef(null);
  const scope = useRef(null);

  const isActive = (path) => location.pathname === path;
  const isLoggedIn = !!token && !!user;

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate("#site-logo", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 250 },
          { to: 1, ease: spring({ bounce: 0.5 }) },
        ],
        duration: 600,
      });

      createDraggable("#site-logo", {
        container: [0, 0, 0, 0],
        releaseEase: spring({ bounce: 0.6 }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <HeaderContainer ref={root}>
      <Nav>
        <LogoSVGContainer id="site-logo">
          <SVGatorCSSOnlyForReactJS />
        </LogoSVGContainer>
        <LogoSVG
          id="site-name"
          src="/src/components/images/eufaco.svg"
          alt="Nome do Site"
          className="animate-bounce"
        />

        <NavLinks>
          <NavItem>
            <StyledLink to="/" className={isActive("/") ? "active" : ""}>
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
                  Cadastrar Serviço
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
                <StyledLink onClick={onLogout}>Sair</StyledLink>
              </NavItem>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
