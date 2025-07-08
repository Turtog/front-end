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
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0583f2;
`;

export const Logo = styled.img`
  max-height: 3rem;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
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
