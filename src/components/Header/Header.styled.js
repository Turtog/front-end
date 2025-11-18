import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #0583f2;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: #0583f2;
  gap: 0.5rem;
`;

/* LOGO PNG */
export const LogoIMG = styled.img`
  height: 3.5rem;
  cursor: grab;
  user-select: none;
`;

/* SVG DO NOME */
export const LogoSVG = styled.img`
  height: 3rem;
  margin-left: 0.5rem;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-left: auto;
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f2441d;
  border-radius: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }

  &.active {
    background-color: #27ae60;
    color: white;
    font-weight: bold;

    &:hover {
      background-color: #229954;
    }
  }
`;
