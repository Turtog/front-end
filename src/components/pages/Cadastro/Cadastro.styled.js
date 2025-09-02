import styled from "styled-components";

export const MainContainer = styled.main`
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;

  h2 {
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
  }

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease,
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 1rem;

  &:hover {
    background-color: #218838;
    transform: scale(1.08);
  }
`;

export const LoginText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #333;
`;

export const LoginLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  transition: letter-spacing 0.5s ease;

  &:hover {
    text-decoration: underline;
    letter-spacing: 2px;
  }
`;
