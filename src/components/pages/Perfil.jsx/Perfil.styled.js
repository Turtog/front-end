import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  text-align: center;

  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }

  p {
    color: #7f8c8d;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }
`;
