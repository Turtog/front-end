import styled from "styled-components";

export const DefaultContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DefaultMain = styled.main`
  flex: 1;
  padding: 2rem 0;
  background-color: #f8f9fa;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
