import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: calc(100vh - 200px);
  background-color: #f8f9fa;
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-bottom: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .profile-info {
    h1 {
      color: #2c3e50;
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
    }

    p {
      color: #6c757d;
      margin: 0;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .profile-info h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  min-height: calc(100vh - 300px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileSection = styled.section`
  flex: 1;
  padding: 2rem;
  background-color: #fff;

  h2 {
    color: #2c3e50;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .user-details {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;

    p {
      margin: 0.5rem 0;
      color: #495057;

      strong {
        color: #2c3e50;
        margin-right: 0.5rem;
      }
    }
  }

  .profile-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .btn-primary,
    .btn-secondary {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;

      &:hover {
        background-color: #2980b9;
      }
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .profile-actions {
      flex-direction: column;

      .btn-primary,
      .btn-secondary {
        width: 100%;
      }
    }
  }
`;

export const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c0392b;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
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
