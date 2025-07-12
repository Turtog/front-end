import styled from "styled-components";

export const GuestContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const GuestMain = styled.main`
  flex: 1;
  padding: 1rem 0;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;
